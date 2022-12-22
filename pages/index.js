import Head from 'next/head';
import Image from 'next/image';
import Contact from '../components/Contact';
import Blob from '../components/Blob';

export default function Home() {
    return (
        <div className="px-60 mx-auto">
            <Head>
                <title>noru ✨ web dev ✨ student </title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="max-w-screen min-h-screen ">
                {/* <div className="relative">
                    <div className="absolute right-20 -z-10 h-screen w-full">
                        <div className="outline outline-gray-200 outline-[30px] border-gray-500 border-[40] animate-mainBlob1 absolute top-0 -right-52 w-72 h-[17rem] rounded-full bg-[#FF4095] mix-blend-multiply filter blur-[30px]  opacity-60 ">
                            {' '}
                        </div>
                        <div className="outline outline-gray-200 outline-[30px] border-gray-500 border-[40] animate-mainBlob2 absolute top-52 -right-40 w-[17rem] h-[20rem] rounded-full bg-[#576ee4] mix-blend-overlay filter blur-[30px]  opacity-60 "></div>
                        <div className="outline outline-gray-200 outline-[30px] border-gray-500 border-[40] animate-mainBlob3 absolute top-40 -right-12 w-[12rem] h-[15rem] rounded-full bg-[#00FFFF] mix-blend-multiply filter blur-[30px]  opacity-60 "></div>
                    </div>
                </div> */}
                <Blob />
                <div className="flex py-20 space-x-20 items-center justify-between">
                    <div className="flex flex-col  basis-[40%] space-y-12 ">
                        <div className="flex mt-20 -mb-3 -space-x-0 items-end justify-start">
                            <h2 className="font-space animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">
                                Noru_{' '}
                            </h2>
                            <p className=" rounded-2xl px-3 py-0 bg-purple-300 font-semibold text-base">
                                yasier
                            </p>
                        </div>
                        <p className="mt-12 font-base font-jak  text-[1.08rem] ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
                            fugiat provident labore maxime dignissimos, unde rem quae natus neque
                            quisquam quaerat optio ipsam! Dignissimos consectetur doloremque
                            nostrum. Doloremque, molestias cupiditate.
                        </p>
                    </div>
                    <div className=" basis-[50%] ">
                        <Image src={'/main.png'} width={600} height={400} alt={'main image'} />
                    </div>
                </div>
                <div class="mt-28 pb-32 mx-auto">
                    <Contact />
                </div>
            </div>
        </div>
    );
}
