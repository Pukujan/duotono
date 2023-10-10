import React from "react";

export default function Faq() {
    return (
        <>
            {" "}
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                    <h2 className="text-2xl font-bold md:text-3xl md:leading-tight text-secondary">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="grid sm:grid-cols-2 gap-6 md:gap-12">

                        {Array.from(Array(10)).map((item, key) => {
                            return (
                                <div key={key}>
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                        Lorem ipsum dolor sit amet. ?
                                    </h3>
                                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro mollitia natus officiis? A, eos cupiditate!
                                    </p>
                                </div>
                            )
                        })}


                    </div>
                </div>
            </div>
        </>
    );
}
