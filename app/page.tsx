'use client';

import { useState, useEffect } from 'react';

export default function Page() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const socialPlatforms = [
        { name: 'Facebook', icon: '📘', users: '2.9B' },
        { name: 'Instagram', icon: '📷', users: '2.0B' },
        { name: 'Twitter', icon: '🐦', users: '450M' },
        { name: 'LinkedIn', icon: '💼', users: '900M' },
        { name: 'TikTok', icon: '🎵', users: '1.0B' },
        { name: 'YouTube', icon: '📺', users: '2.7B' },
    ];

    const features = [
        {
            title: 'Tích hợp đa nền tảng',
            description: 'Kết nối và đồng bộ dữ liệu từ tất cả các mạng xã hội chính',
            icon: '🔗',
        },
        {
            title: 'Phân tích thông minh',
            description: 'AI phân tích hành vi và sở thích khách hàng từ nhiều nguồn',
            icon: '🧠',
        },
        {
            title: 'Báo cáo real-time',
            description: 'Dashboard trực quan với dữ liệu cập nhật theo thời gian thực',
            icon: '📊',
        },
    ];

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white"
            data-oid="ffrg_7c"
        >
            {/* Navigation */}
            <nav
                className="py-6 px-8 flex justify-between items-center backdrop-blur-sm bg-white/5 border-b border-white/10"
                data-oid="lpq023h"
            >
                <div
                    className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                    data-oid="66-uips"
                >
                    Glutisify
                </div>
                <div className="hidden md:flex space-x-8" data-oid="20iudi3">
                    <a
                        href="#features"
                        className="hover:text-blue-400 transition-colors"
                        data-oid="-w3g3xx"
                    >
                        Tính năng
                    </a>
                    <a
                        href="#pricing"
                        className="hover:text-blue-400 transition-colors"
                        data-oid="a:rwxp0"
                    >
                        Giá cả
                    </a>
                    <a
                        href="#contact"
                        className="hover:text-blue-400 transition-colors"
                        data-oid="prui_i7"
                    >
                        Liên hệ
                    </a>
                </div>
                <button
                    className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105"
                    data-oid="mge89am"
                >
                    Dùng thử miễn phí
                </button>
            </nav>

            {/* Hero Section */}
            <main className="max-w-7xl mx-auto px-8 py-20" data-oid="w.e964g">
                <div
                    className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    data-oid="ulvp60v"
                >
                    <h1
                        className="text-5xl md:text-7xl font-bold leading-tight mb-8"
                        data-oid="fj97nzp"
                    >
                        Nền tảng dữ liệu khách hàng
                        <br data-oid="u4sqhja" />
                        <span
                            className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                            data-oid="w60o4vo"
                        >
                            toàn diện
                        </span>
                    </h1>

                    <p
                        className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
                        data-oid="g5rpl5h"
                    >
                        Tích hợp và phân tích dữ liệu khách hàng từ tất cả các mạng xã hội. Hiểu rõ
                        hơn về khách hàng của bạn với AI và machine learning tiên tiến.
                    </p>

                    <div
                        className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
                        data-oid="r2pqgvu"
                    >
                        <button
                            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
                            data-oid="tu:oe-."
                        >
                            Bắt đầu ngay
                        </button>
                        <button
                            className="px-8 py-4 border-2 border-white/20 rounded-full text-lg font-semibold hover:bg-white/10 transition-all"
                            data-oid="2t3x0ki"
                        >
                            Xem demo
                        </button>
                    </div>
                </div>

                {/* Social Platforms Grid */}
                <div
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20"
                    data-oid="g-n1bsv"
                >
                    {socialPlatforms.map((platform, index) => (
                        <div
                            key={platform.name}
                            className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                            data-oid="dnbj8_y"
                        >
                            <div className="text-3xl mb-3" data-oid="0qdommy">
                                {platform.icon}
                            </div>
                            <h3 className="font-semibold mb-1" data-oid="la0lm3f">
                                {platform.name}
                            </h3>
                            <p className="text-sm text-gray-400" data-oid="53t_ygl">
                                {platform.users} users
                            </p>
                        </div>
                    ))}
                </div>

                {/* Features Section */}
                <section id="features" className="mb-20" data-oid="h5-95.a">
                    <h2 className="text-4xl font-bold text-center mb-16" data-oid="99_p65l">
                        Tính năng{' '}
                        <span className="text-blue-400" data-oid="f02ycp3">
                            nổi bật
                        </span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8" data-oid="xx.2rk2">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10"
                                data-oid="08tw76f"
                            >
                                <div className="text-4xl mb-4" data-oid="1hd3sj6">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-4" data-oid="7-e59mw">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-300 leading-relaxed" data-oid="l_4czr0">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Stats Section */}
                <section
                    className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 mb-20 border border-white/10"
                    data-oid="tf92zh2"
                >
                    <div className="grid md:grid-cols-4 gap-8 text-center" data-oid="rx39jyc">
                        <div data-oid="a1e0ypo">
                            <div
                                className="text-4xl font-bold text-blue-400 mb-2"
                                data-oid="p2r2se."
                            >
                                10M+
                            </div>
                            <div className="text-gray-300" data-oid="sz6h9hl">
                                Hồ sơ khách hàng
                            </div>
                        </div>
                        <div data-oid="3lwin67">
                            <div
                                className="text-4xl font-bold text-purple-400 mb-2"
                                data-oid="4cfbgt_"
                            >
                                50+
                            </div>
                            <div className="text-gray-300" data-oid=":0um7r2">
                                Nền tảng tích hợp
                            </div>
                        </div>
                        <div data-oid="q1:466-">
                            <div
                                className="text-4xl font-bold text-pink-400 mb-2"
                                data-oid="oni.ekx"
                            >
                                99.9%
                            </div>
                            <div className="text-gray-300" data-oid="r_9es-s">
                                Uptime
                            </div>
                        </div>
                        <div data-oid="vusvfrd">
                            <div
                                className="text-4xl font-bold text-green-400 mb-2"
                                data-oid=":_bgu_v"
                            >
                                24/7
                            </div>
                            <div className="text-gray-300" data-oid="emiu.4k">
                                Hỗ trợ khách hàng
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="text-center" data-oid="7-l80gw">
                    <h2 className="text-4xl font-bold mb-6" data-oid="7y6q4qp">
                        Sẵn sàng bắt đầu?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" data-oid="-p8xkt8">
                        Tham gia cùng hàng nghìn doanh nghiệp đang sử dụng SocialData Pro để hiểu rõ
                        hơn về khách hàng của họ.
                    </p>
                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        data-oid="ms9c_y0"
                    >
                        <button
                            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105"
                            data-oid="bq_46na"
                        >
                            Dùng thử 14 ngày miễn phí
                        </button>
                        <button
                            className="px-8 py-4 border-2 border-white/20 rounded-full text-lg font-semibold hover:bg-white/10 transition-all"
                            data-oid="eot-wn_"
                        >
                            Liên hệ tư vấn
                        </button>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t border-white/10 py-12 px-8 mt-20" data-oid="tkjypyc">
                <div className="max-w-7xl mx-auto text-center" data-oid="vuj02d:">
                    <div
                        className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4"
                        data-oid="4vxxwa."
                    >
                        SocialData Pro
                    </div>
                    <p className="text-gray-400 mb-6" data-oid="fz0msf-">
                        Nền tảng dữ liệu khách hàng thông minh cho kỷ nguyên số
                    </p>
                    <div
                        className="flex justify-center space-x-8 text-sm text-gray-400"
                        data-oid="_hnmutf"
                    >
                        <a
                            href="#"
                            className="hover:text-white transition-colors"
                            data-oid="6fcqtvw"
                        >
                            Chính sách bảo mật
                        </a>
                        <a
                            href="#"
                            className="hover:text-white transition-colors"
                            data-oid="6ix:qgy"
                        >
                            Điều khoản sử dụng
                        </a>
                        <a
                            href="#"
                            className="hover:text-white transition-colors"
                            data-oid="rdscutd"
                        >
                            Hỗ trợ
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
