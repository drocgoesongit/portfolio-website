import Head from 'next/head';
import WorkCard from '../components/WorkCard';

export default function Work() {
    return (
        <div className="px-60 mx-auto">
            <Head>
                <title>noru ✨ web dev ✨ student </title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="min-h-screen">
                <div className="pt-24 flex flex-col items-center mx-auto w-[75%]">
                    <h2 className=" font-nun bg-gradient-to-r from-[#4ce3e1] via-[#be45ff] to-[#ff8a2a] bg-clip-text text-transparent items-center mx-auto text-5xl font-black">
                        Works
                    </h2>
                    <p class="mt-8">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, et. Placeat
                        quam quod blanditiis, dignissimos praesentium a provident ipsa. Quo officiis
                        perspiciatis soluta, possimus quidem esse quia assumenda voluptate
                        veritatis!
                    </p>
                </div>
                <div className="mt-20 flex flex-col space-y-12 mx-auto items-center w-[75%]">
                    {/* <div className="flex h-40 techWork p-4 overflow-hidden rounded-3xl  ">
                        <div class="relative basis-[45%] rounded-3xl overflow-hidden ">
                            <Image
                                src="/pfpimg.jpeg"
                                layout="fill"
                                alt="work-1"
                                className="object-cover rounded-3xl hover:scale-[1.2] transition-all duration-700 ease-linear "
                            />
                        </div>
                        <div className="grid grid-cols gap-y-4 px-8 py-4 basis-[70%]">
                            <div className="flex justify-between items-center">
                                <div className="font-space font-black text-xl ">nKrypt</div>
                                <div className="flex flex-row space-x-2 justify-between">
                                    <SiJavascript className="h-4 w-4" />
                                    <SiTypescript className="h-4 w-4" />
                                    <IoLogoReact className="h-4 w-4" />
                                    <SiNextdotjs className="h-4 w-4" />
                                    <SiTailwindcss className="h-4 w-4" />
                                    <SiMongodb className="h-4 w-4" />
                                    <SiSolidity className="h-4 w-4" />
                                </div>
                            </div>
                            <div className="font-semibold text-[0.9rem]">
                                Lorem ipsum dolor sit amet, consec tetur adipisicing elit.
                                Temporibus
                            </div>
                        </div>
                    </div>
                    <div className="flex h-40 techWork p-4 overflow-hidden rounded-3xl  ">
                        <div class="relative basis-[45%] rounded-3xl overflow-hidden ">
                            <Image
                                src="/pfpimg.jpeg"
                                layout="fill"
                                alt="work-1"
                                className="object-cover rounded-3xl hover:scale-[1.2] transition-all duration-700 ease-linear "
                            />
                        </div>
                        <div className="grid grid-cols gap-y-4 px-8 py-4 basis-[70%]">
                            <div className="flex justify-between items-center">
                                <div className="font-space font-black text-xl ">nKrypt</div>
                                <div className="flex flex-row space-x-2 justify-between">
                                    <SiJavascript className="h-4 w-4" />
                                    <SiTypescript className="h-4 w-4" />
                                    <IoLogoReact className="h-4 w-4" />
                                    <SiNextdotjs className="h-4 w-4" />
                                    <SiTailwindcss className="h-4 w-4" />
                                    <SiMongodb className="h-4 w-4" />
                                    <SiSolidity className="h-4 w-4" />
                                </div>
                            </div>
                            <div className="font-semibold text-[0.9rem]">
                                Lorem ipsum dolor sit amet, consec tetur adipisicing elit.
                                Temporibus
                            </div>
                        </div>
                    </div>
                    <div className="flex h-40 techWork p-4 overflow-hidden rounded-3xl  ">
                        <div class="relative basis-[45%] rounded-3xl overflow-hidden ">
                            <Image
                                src="/pfpimg.jpeg"
                                layout="fill"
                                alt="work-1"
                                className="object-cover rounded-3xl hover:scale-[1.2] transition-all duration-700 ease-linear "
                            />
                        </div>
                        <div className="grid grid-cols gap-y-4 px-8 py-4 basis-[70%]">
                            <div className="flex justify-between items-center">
                                <div className="font-space font-black text-xl ">nKrypt</div>
                                <div className="flex flex-row space-x-2 justify-between">
                                    <SiJavascript className="h-4 w-4" />
                                    <SiTypescript className="h-4 w-4" />
                                    <IoLogoReact className="h-4 w-4" />
                                    <SiNextdotjs className="h-4 w-4" />
                                    <SiTailwindcss className="h-4 w-4" />
                                    <SiMongodb className="h-4 w-4" />
                                    <SiSolidity className="h-4 w-4" />
                                </div>
                            </div>
                            <div className="font-semibold text-[0.9rem]">
                                Lorem ipsum dolor sit amet, consec tetur adipisicing elit.
                                Temporibus
                            </div>
                        </div>
                    </div> */}
                    <WorkCard
                        title={'nKrypt'}
                        description={'lorem ipsum dorem dolor sit amet consec tetur elit.'}
                        arr={[null, 1, null, 1, null, 1, 1]}
                        img={'/pfpimg.jpeg'}
                    />
                    <WorkCard
                        title={'nKrypt'}
                        description={'lorem ipsum dorem dolor sit amet consec tetur elit.'}
                        arr={[1, 1, 1, 1, null, 1, 1]}
                        img={'/pfpimg.jpeg'}
                    />
                    <WorkCard
                        title={'nKrypt'}
                        description={'lorem ipsum dorem dolor sit amet consec tetur elit.'}
                        arr={[1, null, null, 1, 1, null, 1]}
                        img={'/pfpimg.jpeg'}
                    />
                </div>
            </main>
        </div>
    );
}
