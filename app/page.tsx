'use client';

import { useState, useEffect } from 'react';

export default function Page() {
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        setIsVisible(true);

        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 500);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const socialPlatforms = [
        { name: 'Facebook', icon: '📘', users: '2.9B', color: 'from-blue-500 to-blue-600' },
        { name: 'Instagram', icon: '📷', users: '2.0B', color: 'from-pink-500 to-purple-600' },
        { name: 'Twitter', icon: '🐦', users: '450M', color: 'from-sky-400 to-blue-500' },
        { name: 'LinkedIn', icon: '💼', users: '900M', color: 'from-blue-600 to-blue-700' },
        { name: 'TikTok', icon: '🎵', users: '1.0B', color: 'from-gray-800 to-black' },
        { name: 'YouTube', icon: '📺', users: '2.7B', color: 'from-red-500 to-red-600' },
    ];

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden"
            data-oid=":0w0x8s"
        >
            <div className="absolute inset-0 overflow-hidden" data-oid="u45kkfd">
                <div
                    className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
                    style={{
                        left: mousePosition.x / 10,
                        top: mousePosition.y / 10,
                        transform: 'translate(-50%, -50%)',
                    }}
                    data-oid="vh6xu7-"
                />

                <div
                    className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"
                    data-oid="7s36z9k"
                />
                <div
                    className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"
                    data-oid="8ku6kab"
                />
            </div>

            <nav
                className="relative z-50 py-6 px-8 flex justify-between items-center backdrop-blur-xl bg-white/5 border-b border-white/10 shadow-2xl"
                data-oid="ee06nxl"
            >
                <div
                    className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                    data-oid="47f1e4o"
                >
                    Glutisify
                </div>
                <div className="hidden md:flex space-x-8" data-oid="d3lx2yu">
                    <a href="#features" className="relative group" data-oid="pckx46z">
                        <span
                            className="hover:text-blue-400 transition-all duration-300"
                            data-oid=":kz-_mz"
                        >
                            Tính năng
                        </span>
                        <div
                            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"
                            data-oid="x0o1goi"
                        />
                    </a>
                    <a href="/pricing" className="relative group" data-oid="67--9vp">
                        <span
                            className="hover:text-blue-400 transition-all duration-300"
                            data-oid="u3rwcrx"
                        >
                            Giá cả
                        </span>
                        <div
                            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"
                            data-oid="07t0fj7"
                        />
                    </a>
                    <a href="/contact" className="relative group" data-oid="m2kmwry">
                        <span
                            className="hover:text-blue-400 transition-all duration-300"
                            data-oid="nwtc0cr"
                        >
                            Liên hệ
                        </span>
                        <div
                            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"
                            data-oid="jif_ft6"
                        />
                    </a>
                </div>
                <a
                    href="/contact"
                    className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold"
                    data-oid="i_:ltt7"
                >
                    Dùng thử miễn phí
                </a>
            </nav>

            <main
                className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20"
                data-oid="yrl8p:8"
            >
                <div
                    className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    data-oid="e.:0j39"
                >
                    <div className="mb-8" data-oid="epe38n5">
                        <span
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-sm font-medium backdrop-blur-sm hover:scale-105 transition-transform duration-300"
                            data-oid=":_-5m06"
                        >
                            <span className="text-lg" data-oid="_haazpw">
                                🚀
                            </span>
                            Nền tảng AI hàng đầu Việt Nam
                        </span>
                    </div>

                    <h1
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
                        data-oid="17sq5m1"
                    >
                        Nền tảng dữ liệu khách hàng
                        <br data-oid=".gqogjf" />
                        <span
                            className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                            data-oid=":m95y:-"
                        >
                            toàn diện
                        </span>
                    </h1>

                    <p
                        className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
                        data-oid="d4qjmr7"
                    >
                        Tích hợp và phân tích dữ liệu khách hàng từ tất cả các mạng xã hội.
                        <br className="hidden md:block" data-oid="4x85x4m" />
                        Hiểu rõ hơn về khách hàng của bạn với AI và machine learning tiên tiến.
                    </p>

                    <div
                        className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-16 sm:mb-20"
                        data-oid="gcfl51-"
                    >
                        <button
                            className="group px-8 sm:px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-base sm:text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25"
                            data-oid="j-ikhlc"
                        >
                            <span
                                className="flex items-center justify-center gap-2"
                                data-oid="aadi2t9"
                            >
                                Bắt đầu ngay
                                <span
                                    className="group-hover:translate-x-1 transition-transform"
                                    data-oid="-irp7lf"
                                >
                                    →
                                </span>
                            </span>
                        </button>
                        <button
                            className="px-8 sm:px-10 py-4 border-2 border-white/20 rounded-full text-base sm:text-lg font-semibold hover:bg-white/10 transition-all backdrop-blur-sm hover:border-white/40"
                            data-oid="jrpx9n:"
                        >
                            <span
                                className="flex items-center justify-center gap-2"
                                data-oid="bq9aji5"
                            >
                                ▶️ Xem demo
                            </span>
                        </button>
                    </div>
                </div>

                <div
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mb-20 sm:mb-24"
                    data-oid="qmy0fnl"
                >
                    {socialPlatforms.map((platform, index) => (
                        <div
                            key={platform.name}
                            className={`group bg-white/5 backdrop-blur-xl rounded-2xl p-4 sm:p-6 text-center hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-white/10 hover:border-white/20 shadow-xl hover:shadow-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                            data-oid="099v75a"
                        >
                            <div
                                className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300"
                                data-oid="0j7_1ix"
                            >
                                {platform.icon}
                            </div>
                            <h3 className="font-bold mb-2 text-base sm:text-lg" data-oid="tz347f_">
                                {platform.name}
                            </h3>
                            <p
                                className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors"
                                data-oid="4rto8ge"
                            >
                                {platform.users} users
                            </p>
                            <div
                                className={`mt-3 h-1 bg-gradient-to-r ${platform.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                                data-oid="fafchn5"
                            />
                        </div>
                    ))}
                </div>
            </main>

            <button
                onClick={scrollToTop}
                className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-110 flex items-center justify-center group ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
                aria-label="Back to top"
                data-oid="n8wydur"
            >
                <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="ho58l8."
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                        data-oid="dpa_736"
                    />
                </svg>
            </button>
        </div>
    );
}
