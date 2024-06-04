import React from 'react';
import Swagger from '@/components/Swagger';
import spec from './swagger-suno-api.json'; // 直接导入JSON文件


export default function Docs() {
    return (
        <>
            

                <div className=' border p-4 rounded-2xl shadow-xl hover:shadow-none duration-200'>
                    <Swagger spec={spec} />
                </div>

        </>

    );
}
