"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { ControllerRenderProps, useForm } from "react-hook-form"
import { z } from "zod"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { useToast } from "./ui/use-toast"
import { Loader } from "lucide-react"
import axios from "axios"

const formSchema = z.object({
  prompt: z.string().min(10).refine(
    (val) => val.split(' ').length <= 200,
    {
      message: 'Prompt must be 200 words or less',
    }
  ),
  make_instrumental: z.boolean()
});

const customeModeSchema = z.object({
  lyrics: z.string().refine(
    (val) => val.split(' ').length <= 3000,
    {
      message: 'Lyrics must be 3000 words or less'
    }
  ).optional(),
  title: z.string().min(2),
  tags: z.string()
})
const styles = [
  "melancholic", "rock", "emo", "upbeat", "guitar", "hard rock", "emotional",
  "pop", "metal", "jazz", "swing", "bass", "beat", "electro"
];

export default function CreateSong() {
  const [charactersCount, setCharactersCount] = useState(0)
  const [isCustomeMode, setIsCustomeMode] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [availableStyles, setAvailableStyles] = useState<string[]>(styles);
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [isInstrumental, setIsInstrumental] = useState(false)
  const [isGeneratingLyrics, setIsGeneratingLyrics] = useState<boolean>(false)
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
      make_instrumental: false
    }
  })
  const customeModeForm = useForm<z.infer<typeof customeModeSchema>>({
    resolver: zodResolver(customeModeSchema),
    defaultValues: {
      lyrics: "",
      title: "",
      tags: ""
    }
  })
  const baseUrl = 'http://localhost:3000'; // Assuming backend API is running on this port
  async function makeRandomLyrics(lyrics: string | undefined) {
    try {
      setIsGeneratingLyrics(true)
      if (lyrics === "" || lyrics === undefined) {
        toast({
          title: 'Please add lyrics'
        })
        setIsSubmitting(false)
        throw new Error("Please add title and tags")
      }
      if (isInstrumental) {
        throw new Error("Should not generate lyrics for Instrumental mode")
      }
      const url = `${baseUrl}/api/generate_lyrics`
      const payload = {
        prompt: lyrics,
      }
      const response = await axios.post(url, payload, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      customeModeForm.setValue("lyrics", response.data.text)
      setCharactersCount(response.data.text.length)
      toast({ title: 'Generated lyrics' })

      setIsGeneratingLyrics(false)
    } catch (error) {

    }
  }
  async function onSubmitCustomeMode(data: z.infer<typeof customeModeSchema>) {
    try {
      setIsSubmitting(true)
      const prompt = customeModeForm.getValues("lyrics")
      if (!data.title || !data.tags || prompt === "" || data.title === "" || data.tags === "") {
        toast({
          title: 'Please add title and tags'
        })
        setIsSubmitting(false)
      }

      const url = `${baseUrl}/api/custom_generate`
      const payload = {
        prompt: prompt,
        tags: data.tags,
        title: data.title,
        make_instrumental: false,
        wait_audio: true,
      }
      const response = await axios.post(url, payload, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      console.log(response.data);
      toast({ title: 'Song created' })
      setIsSubmitting(false)
    } catch (error) {
      console.log(error)

      toast({
        title: 'Error',
        variant: 'destructive'
      })
      setIsSubmitting(false)
    }
  }
  async function onSubmit(data: z.infer<typeof formSchema>) {
    console.log("submit")
    try {
      setIsSubmitting(true)
      if (data.prompt === "") {
        toast({
          title: 'Please generate some text'
        })
        setIsSubmitting(false)
        throw new Error("Please generate some text")
      }
      const payload = {
        prompt: data.prompt,
        make_instrumental: false,
        wait_audio: true,
      }
      const url = `${baseUrl}/api/generate`
      const response = await axios.post(url, payload, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      console.log(response.data);
      toast({ title: 'Song created' })
      setIsSubmitting(false)
    } catch (error) {
      console.log(error)
      toast({
        title: 'Error',
        variant: 'destructive'
      })
      setIsSubmitting(false)
    }
  }
  const handleStyleClick = (
    style: string,
    field: ControllerRenderProps<{ title: string; tags: string; lyrics?: string | undefined }, 'lyrics'>
  ) => {
    let newValue: string;
    if (field.value === '') {
      newValue = style;
    } else {
      newValue = `${field.value}, ${style}`;
    }
    field.onChange(newValue);
    setSelectedStyles([...selectedStyles, style]);
    setAvailableStyles(availableStyles.filter(s => s !== style));
  };

  return (
    <div className='hidden md:flex flex-col border-r border-r-zinc-700 min-w-[300px] overflow-y-auto h-full md:min-w-[360px] flex-1 max-w-[300px]  md:max-w-[360px] custom-scrollbar '>
      {/*custome mode */}
      <div className="flex items-center px-2 space-x-2 pt-4">
        <Switch checked={isCustomeMode} onCheckedChange={() =>
          setIsCustomeMode((prev) => !prev)} id="airplane-mode" />
        <Label htmlFor="airplane-mode" className="text-base leading-5">Custome Mode</Label>

      </div>
      <div className="flex flex-col px-2 py-4 w-full gap-0">
        {isCustomeMode ? (
          <div className="flex flex-col flex-1 ">
            <Form {...customeModeForm}>
              <form onSubmit={customeModeForm.handleSubmit(onSubmitCustomeMode)}>
                {isInstrumental ? null : (

                  <FormField
                    control={customeModeForm.control}
                    name="lyrics"
                    render={({ field }) => (
                      <FormItem className="flex flex-col gap-2.5">
                        <FormLabel className="text-base  text-white-1">Lyrics</FormLabel>
                        <FormControl>
                          <Textarea className="input-class border-solid border border-red-200 focus-visible:ring-offset-orange-1" placeholder="an anthemic grime song about being trapped in an AI song factory, help!" rows={6} {...field} onChange={(e) => {
                            const value = e.target.value;
                            if (value.length <= 3000) {
                              field.onChange(value);
                              setCharactersCount(value.length);
                            } else {
                              field.onChange(value.slice(0, 3000));
                            }
                          }}
                          />
                        </FormControl>
                        <div className="flex items-center justify-between">
                          <Button variant="default" className="text-base text-white-1 font-semibold bg-zinc-800" onClick={async () => await makeRandomLyrics(field.value)}
                          >
                            {isGeneratingLyrics ? (
                              <>
                                Generating Lyrics
                                <Loader size={20} className="animate-spin ml-2" />
                              </>
                            ) : (
                              'Make Random Lyrics'
                            )}

                          </Button>
                          <p className="text-right text-orange-200">{charactersCount}/3000</p>
                        </div>
                        <FormMessage className="text-white-1" />
                      </FormItem>
                    )}
                  />
                )}
                <FormField
                  control={form.control}
                  name="make_instrumental"
                  render={({ field }) => (
                    <FormItem className="flex flex-1 items-center gap-x-2 py-3">
                      <FormControl >
                        <Switch className="bg-red-700" checked={field.value} onCheckedChange={(e) => {
                          field.onChange(e)
                          setIsInstrumental(!isInstrumental)
                        }} id="airplane-mode" />
                      </FormControl>
                      <div id="Instrumental" className="text-base m-0 p-0">Instrumental</div>
                      <FormMessage className="text-white-1" />
                    </FormItem>
                  )}
                />
                <div className="p-2">
                  <div>Style Of Music</div>
                  <div className="p-1 rounded-s border-2  border-zinc-700  focus:ring focus-visible:ring-offset-orange-1">
                    <FormField control={customeModeForm.control} name="tags"
                      render={({ field }) => (
                        <>
                          <div className="relative">
                            <Textarea className="input-class border-solid border border-red-200 focus-visible:ring-offset-orange-1" placeholder="an anthemic grime song about being trapped in an AI song factory, help!" rows={4} {...field} onChange={(e) => {
                              const value = e.target.value;

                              if (value.length <= 3000) {
                                field.onChange(e);
                                setCharactersCount(value.length);
                              } else {
                                field.onChange(value.slice(0, 3000));
                              }
                            }} />
                          </div>
                          <div className="mt-1 flex flex-1 ">
                            {/*Buttons of styles*/}
                            <div className="flex flex-wrap">

                              {availableStyles.slice(0, 5).map(style => (
                                <button
                                  key={style}
                                  className="m-1 p-1 border border-zinc-700 rounded focus-visible:ring-offset-orange-1"
                                  onClick={() => handleStyleClick(style, field)}
                                >
                                  {style}
                                </button>
                              ))}
                            </div>
                          </div>

                        </>
                      )} />
                  </div>
                </div>
                <div className="flex flex-col px-2 mt-2 gap-2">
                  <Label className="text-base font-normal">Title</Label>
                  <FormField control={customeModeForm.control} name="title"
                    render={({ field }) => (
                      <>
                        <Input {...field} className="rounded-s bg-transparent border-2 border-zinc-700 focus-visible:border-orange-1 focus-visible:ring-0 focus-visible:outline-none" placeholder="Enter a title" />
                      </>
                    )}
                  />
                </div>

                <div className="mt-10 w-full">
                  <Button type="submit" className="text-base w-full bg-orange-1 py-4 font-extrabold text-white-1 transition-all duration-500 hover:bg-orange-400">
                    {isSubmitting ? (
                      <>
                        Submitting
                        <Loader size={20} className="animate-spin ml-2" />
                      </>
                    ) : (
                      'Create Song'
                    )}
                  </Button>
                </div>
              </form>
            </Form>

          </div>
        ) : (

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="">
              <FormField
                control={form.control}
                name="prompt"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-2.5">
                    <FormLabel className="text-base  text-white-1">Song Description</FormLabel>
                    <FormControl>
                      <Textarea className="input-class border-solid border border-red-200 focus-visible:ring-offset-orange-1" placeholder="an anthemic grime song about being trapped in an AI song factory, help!" rows={4} {...field} onChange={(e) => {
                        const value = e.target.value;

                        if (value.length <= 200) {
                          field.onChange(e);
                          setCharactersCount(value.length);
                        } else {
                          field.onChange(value.slice(0, 200));
                        }
                      }} />
                    </FormControl>
                    <p className="text-right text-orange-200">{charactersCount}/200</p>
                    <FormMessage className="text-white-1" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="make_instrumental"
                render={({ field }) => (
                  <FormItem className="flex flex-1 items-center gap-x-2 py-3">
                    <FormControl >
                      <Switch className="bg-red-700" checked={field.value} onCheckedChange={(e) => {
                        field.onChange(e)
                        setIsInstrumental(!isInstrumental)
                      }} id="airplane-mode" />
                    </FormControl>
                    <div id="Instrumental" className="text-base m-0 p-0">Instrumental</div>
                    <FormMessage className="text-white-1" />
                  </FormItem>
                )}
              />
              <div className="mt-10 w-full">
                <Button type="submit" className="text-base w-full bg-orange-1 py-4 font-extrabold text-white-1 transition-all duration-500 hover:bg-orange-400">
                  {isSubmitting ? (
                    <>
                      Submitting
                      <Loader size={20} className="animate-spin ml-2" />
                    </>
                  ) : (
                    'Create Song'
                  )}
                </Button>
              </div>
            </form>
          </Form>

        )}

      </div>
    </div>
  )
}
