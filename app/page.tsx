'use client';

import { useState, useEffect } from 'react';

export default function Page() {
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        setIsVisible(true);

        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const socialPlatforms = [
        { name: 'Facebook', icon: '📘', users: '2.9B', color: 'from-blue-500 to-blue-600' },
        { name: 'Instagram', icon: '📷', users: '2.0B', color: 'from-pink-500 to-purple-600' },
        { name: 'Twitter', icon: '🐦', users: '450M', color: 'from-sky-400 to-blue-500' },
        { name: 'LinkedIn', icon: '💼', users: '900M', color: 'from-blue-600 to-blue-700' },
        { name: 'TikTok', icon: '🎵', users: '1.0B', color: 'from-gray-800 to-black' },
        { name: 'YouTube', icon: '📺', users: '2.7B', color: 'from-red-500 to-red-600' },
    ];

    const features = [
        {
            title: 'Tích hợp đa nền tảng',
            description:
                'Kết nối và đồng bộ dữ liệu từ tất cả các mạng xã hội chính với API mạnh mẽ',
            icon: '🔗',
            gradient: 'from-blue-500 to-cyan-500',
        },
        {
            title: 'Phân tích thông minh',
            description:
                'AI và Machine Learning phân tích hành vi, sở thích khách hàng từ nhiều nguồn',
            icon: '🧠',
            gradient: 'from-purple-500 to-pink-500',
        },
        {
            title: 'Báo cáo real-time',
            description:
                'Dashboard trực quan với dữ liệu cập nhật theo thời gian thực và insights sâu sắc',
            icon: '📊',
            gradient: 'from-green-500 to-emerald-500',
        },
    ];

    const testimonials = [
        {
            name: 'Nguyễn Văn A',
            role: 'CEO, TechCorp',
            content:
                'Glutisify đã giúp chúng tôi hiểu rõ khách hàng hơn 300% và tăng conversion rate đáng kể.',
            avatar: '👨‍💼',
        },
        {
            name: 'Trần Thị B',
            role: 'Marketing Director, StartupXYZ',
            content:
                'Nền tảng tuyệt vời! Dữ liệu real-time và insights AI đã thay đổi cách chúng tôi làm marketing.',
            avatar: '👩‍💼',
        },
    ];

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden"
            data-oid="-1zuc0k"
        >
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden" data-oid=":20f7fm">
                <div
                    className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
                    style={{
                        left: mousePosition.x / 10,
                        top: mousePosition.y / 10,
                        transform: 'translate(-50%, -50%)',
                    }}
                    data-oid="3aun55k"
                />

                <div
                    className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"
                    data-oid="j09jbew"
                />

                <div
                    className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"
                    data-oid="udo60k0"
                />
            </div>

            {/* Navigation */}
            <nav
                className="relative z-50 py-6 px-8 flex justify-between items-center backdrop-blur-xl bg-white/5 border-b border-white/10 shadow-2xl"
                data-oid="rw37rxj"
            >
                <div
                    className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                    data-oid="3bvyswc"
                >
                    Glutisify
                </div>
                <div className="hidden md:flex space-x-8" data-oid="r0fwn0c">
                    <a href="#features" className="relative group" data-oid="zarsmon">
                        <span
                            className="hover:text-blue-400 transition-all duration-300"
                            data-oid="5itgho."
                        >
                            Tính năng
                        </span>
                        <div
                            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"
                            data-oid="r9w83yp"
                        />
                    </a>
                    <a href="#pricing" className="relative group" data-oid="p-pwnv7">
                        <span
                            className="hover:text-blue-400 transition-all duration-300"
                            data-oid="8z_cl3s"
                        >
                            Giá cả
                        </span>
                        <div
                            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"
                            data-oid="bza41ye"
                        />
                    </a>
                    <a href="#contact" className="relative group" data-oid="s4xiouq">
                        <span
                            className="hover:text-blue-400 transition-all duration-300"
                            data-oid="evqcwdi"
                        >
                            Liên hệ
                        </span>
                        <div
                            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"
                            data-oid="wqvv8dd"
                        />
                    </a>
                </div>
                <button
                    className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold"
                    data-oid=".q4etka"
                >
                    Dùng thử miễn phí
                </button>
            </nav>

            {/* Hero Section */}
            <main className="relative z-10 max-w-7xl mx-auto px-8 py-20" data-oid="_086etc">
                <div
                    className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    data-oid="lzn-cgx"
                >
                    <div className="mb-6" data-oid="71cjj7v">
                        <span
                            className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-sm font-medium backdrop-blur-sm"
                            data-oid="l3gn4uq"
                        >
                            🚀 Nền tảng AI hàng đầu Việt Nam
                        </span>
                    </div>

                    <h1
                        className="text-6xl md:text-8xl font-bold leading-tight mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
                        data-oid="izxmu2q"
                    >
                        Nền tảng dữ liệu khách hàng
                        <br data-oid="g.z.ldj" />
                        <span
                            className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse"
                            data-oid="9pdnr8a"
                        >
                            toàn diện
                        </span>
                    </h1>

                    <p
                        className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
                        data-oid="9m0koxt"
                    >
                        Tích hợp và phân tích dữ liệu khách hàng từ tất cả các mạng xã hội.
                        <br className="hidden md:block" data-oid="1eq8kok" />
                        Hiểu rõ hơn về khách hàng của bạn với AI và machine learning tiên tiến.
                    </p>

                    <div
                        className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
                        data-oid="z-3erx9"
                    >
                        <button
                            className="group px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25"
                            data-oid="z8kynmj"
                        >
                            <span
                                className="flex items-center justify-center gap-2"
                                data-oid="repw-zd"
                            >
                                Bắt đầu ngay
                                <span
                                    className="group-hover:translate-x-1 transition-transform"
                                    data-oid="47.1l-r"
                                >
                                    →
                                </span>
                            </span>
                        </button>
                        <button
                            className="px-10 py-4 border-2 border-white/20 rounded-full text-lg font-semibold hover:bg-white/10 transition-all backdrop-blur-sm hover:border-white/40"
                            data-oid="jse522t"
                        >
                            <span
                                className="flex items-center justify-center gap-2"
                                data-oid="b0jkwku"
                            >
                                ▶️ Xem demo
                            </span>
                        </button>
                    </div>
                </div>

                {/* Social Platforms Grid */}
                <div
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-24"
                    data-oid="sui5-.."
                >
                    {socialPlatforms.map((platform, index) => (
                        <div
                            key={platform.name}
                            className={`group bg-white/5 backdrop-blur-xl rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 border border-white/10 hover:border-white/20 shadow-xl hover:shadow-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                            data-oid="kg86k0t"
                        >
                            <div
                                className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300"
                                data-oid="z4s29jv"
                            >
                                {platform.icon}
                            </div>
                            <h3 className="font-bold mb-2 text-lg" data-oid="yg0nlo8">
                                {platform.name}
                            </h3>
                            <p
                                className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors"
                                data-oid="eysqom0"
                            >
                                {platform.users} users
                            </p>
                            <div
                                className={`mt-3 h-1 bg-gradient-to-r ${platform.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                                data-oid="2ux70p5"
                            />
                        </div>
                    ))}
                </div>

                {/* Features Section */}
                <section id="features" className="mb-24" data-oid="dw0zjiu">
                    <div className="text-center mb-16" data-oid="gfdnl.s">
                        <h2 className="text-5xl md:text-6xl font-bold mb-6" data-oid="5cxzliz">
                            Tính năng{' '}
                            <span
                                className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                                data-oid="bkjikmg"
                            >
                                nổi bật
                            </span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto" data-oid="5nzxaot">
                            Khám phá những tính năng mạnh mẽ giúp bạn hiểu rõ khách hàng hơn bao giờ
                            hết
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8" data-oid="73y-3qv">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group bg-white/5 backdrop-blur-xl rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-white/20 shadow-xl hover:shadow-2xl transform hover:-translate-y-2"
                                data-oid="kf6cuz8"
                            >
                                <div
                                    className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                                    data-oid="0-m2ahu"
                                >
                                    {feature.icon}
                                </div>
                                <h3
                                    className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors"
                                    data-oid="fn3p2.:"
                                >
                                    {feature.title}
                                </h3>
                                <p
                                    className="text-gray-300 leading-relaxed text-lg"
                                    data-oid="dppduet"
                                >
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Stats Section */}
                <section
                    className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-12 mb-24 border border-white/20 shadow-2xl"
                    data-oid="4jk87md"
                >
                    <div className="grid md:grid-cols-4 gap-8 text-center" data-oid="5lisivc">
                        <div className="group" data-oid="9zo2vm6">
                            <div
                                className="text-5xl font-bold text-blue-400 mb-3 group-hover:scale-110 transition-transform duration-300"
                                data-oid="wdt0_:6"
                            >
                                10M+
                            </div>
                            <div className="text-gray-300 text-lg font-medium" data-oid="tqoxsai">
                                Hồ sơ khách hàng
                            </div>
                        </div>
                        <div className="group" data-oid="_017cul">
                            <div
                                className="text-5xl font-bold text-purple-400 mb-3 group-hover:scale-110 transition-transform duration-300"
                                data-oid="53oflop"
                            >
                                50+
                            </div>
                            <div className="text-gray-300 text-lg font-medium" data-oid="4:.21t5">
                                Nền tảng tích hợp
                            </div>
                        </div>
                        <div className="group" data-oid="3iwyra:">
                            <div
                                className="text-5xl font-bold text-pink-400 mb-3 group-hover:scale-110 transition-transform duration-300"
                                data-oid="tsgq8mu"
                            >
                                99.9%
                            </div>
                            <div className="text-gray-300 text-lg font-medium" data-oid="ksjy7nt">
                                Uptime
                            </div>
                        </div>
                        <div className="group" data-oid="yl5x9p4">
                            <div
                                className="text-5xl font-bold text-green-400 mb-3 group-hover:scale-110 transition-transform duration-300"
                                data-oid="lu25ikn"
                            >
                                24/7
                            </div>
                            <div className="text-gray-300 text-lg font-medium" data-oid="e.z1wns">
                                Hỗ trợ khách hàng
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="mb-24 relative" data-oid="a5mtic0">
                    {/* Background decoration */}
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl blur-3xl"
                        data-oid="-uk1yac"
                    ></div>

                    <div className="relative z-10" data-oid=":aimd1o">
                        <div className="text-center mb-20" data-oid="vzb5_6e">
                            <div
                                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-sm font-medium backdrop-blur-sm mb-6"
                                data-oid="1j3xrj-"
                            >
                                ⭐ Testimonials
                            </div>
                            <h2 className="text-5xl md:text-6xl font-bold mb-6" data-oid="rsw48zb">
                                Khách hàng nói gì về{' '}
                                <span
                                    className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                                    data-oid="x_xft:z"
                                >
                                    Glutisify
                                </span>
                            </h2>
                            <p
                                className="text-xl text-gray-400 max-w-3xl mx-auto"
                                data-oid="b0y1pwu"
                            >
                                Hàng nghìn doanh nghiệp tin tưởng và đạt được kết quả vượt trội với
                                Glutisify
                            </p>
                        </div>

                        <div
                            className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
                            data-oid="cvn2sx9"
                        >
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:bg-white/10 transform hover:-translate-y-2 hover:scale-[1.02] shadow-2xl hover:shadow-blue-500/10"
                                    data-oid="z1.0rqu"
                                >
                                    {/* Decorative elements */}
                                    <div
                                        className="absolute top-4 right-4 text-6xl text-blue-400/20 group-hover:text-blue-400/40 transition-colors duration-300"
                                        data-oid="efi65a4"
                                    >
                                        "
                                    </div>
                                    <div
                                        className="absolute -top-2 -left-2 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"
                                        data-oid="ptr2-r_"
                                    ></div>

                                    {/* Rating stars */}
                                    <div className="flex gap-1 mb-6" data-oid="l10jv:4">
                                        {[...Array(5)].map((_, i) => (
                                            <span
                                                key={i}
                                                className="text-yellow-400 text-lg"
                                                data-oid="y-xho5c"
                                            >
                                                ⭐
                                            </span>
                                        ))}
                                    </div>

                                    {/* Quote content */}
                                    <div className="relative z-10 mb-8" data-oid="z2vd-18">
                                        <p
                                            className="text-gray-200 leading-relaxed text-lg font-medium relative"
                                            data-oid="__r159r"
                                        >
                                            <span
                                                className="text-blue-400 text-2xl absolute -left-2 -top-2"
                                                data-oid="0i39oty"
                                            >
                                                "
                                            </span>
                                            <span className="ml-4" data-oid="i6v3:u9">
                                                {testimonial.content}
                                            </span>
                                            <span
                                                className="text-blue-400 text-2xl"
                                                data-oid="yvx641n"
                                            >
                                                "
                                            </span>
                                        </p>
                                    </div>

                                    {/* Author info */}
                                    <div
                                        className="flex items-center relative z-10"
                                        data-oid=":lj__:f"
                                    >
                                        <div className="relative mr-4" data-oid=":ga3l_m">
                                            <div
                                                className="w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-3xl shadow-2xl group-hover:shadow-blue-500/30 group-hover:scale-110 transition-all duration-300 border-2 border-white/20"
                                                data-oid="26nzqq4"
                                            >
                                                {testimonial.avatar}
                                            </div>
                                            <div
                                                className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full border-3 border-white flex items-center justify-center shadow-lg"
                                                data-oid="bci63c."
                                            >
                                                <span
                                                    className="text-white text-sm font-bold"
                                                    data-oid="h-8gv:3"
                                                >
                                                    ✓
                                                </span>
                                            </div>
                                        </div>
                                        <div
                                            className="flex flex-col justify-center"
                                            data-oid="3oqenvg"
                                        >
                                            <h4
                                                className="font-bold text-2xl text-white group-hover:text-blue-300 transition-colors duration-300 mb-1"
                                                data-oid=".4_080s"
                                            >
                                                {testimonial.name}
                                            </h4>
                                            <p
                                                className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 font-medium text-lg mb-2"
                                                data-oid="p0h9tqj"
                                            >
                                                {testimonial.role}
                                            </p>
                                            <div
                                                className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-full backdrop-blur-sm"
                                                data-oid="l26qb1q"
                                            >
                                                <div
                                                    className="w-2 h-2 bg-green-400 rounded-full animate-pulse"
                                                    data-oid="bsyt53p"
                                                ></div>
                                                <span
                                                    className="text-xs text-green-400 font-semibold uppercase tracking-wide"
                                                    data-oid="ktrhy_m"
                                                >
                                                    Verified Customer
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hover effect overlay */}
                                    <div
                                        className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -left-[79px] -top-[27px]"
                                        data-oid="_tjayqn"
                                    ></div>
                                </div>
                            ))}
                        </div>

                        {/* Additional social proof */}
                        <div className="mt-16 text-center" data-oid="itybtxa">
                            <div
                                className="inline-flex items-center gap-8 px-8 py-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10"
                                data-oid="ggxvyt3"
                            >
                                <div className="text-center" data-oid="xk4no.i">
                                    <div
                                        className="text-2xl font-bold text-blue-400"
                                        data-oid="jjkf.r-"
                                    >
                                        4.9/5
                                    </div>
                                    <div className="text-sm text-gray-400" data-oid="e1v0_n8">
                                        Rating
                                    </div>
                                </div>
                                <div className="w-px h-8 bg-white/20" data-oid="_v21z76"></div>
                                <div className="text-center" data-oid="i0e23gg">
                                    <div
                                        className="text-2xl font-bold text-purple-400"
                                        data-oid="lm6b3gk"
                                    >
                                        1000+
                                    </div>
                                    <div className="text-sm text-gray-400" data-oid="y2t31-7">
                                        Reviews
                                    </div>
                                </div>
                                <div className="w-px h-8 bg-white/20" data-oid="paxj.:e"></div>
                                <div className="text-center" data-oid="g3vt0uy">
                                    <div
                                        className="text-2xl font-bold text-pink-400"
                                        data-oid="a:k.u8s"
                                    >
                                        99%
                                    </div>
                                    <div className="text-sm text-gray-400" data-oid="ccdbcyz">
                                        Satisfaction
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section
                    className="text-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl rounded-3xl p-16 border border-white/20"
                    data-oid="-d9t.k0"
                >
                    <h2 className="text-5xl font-bold mb-6" data-oid="4uyia2f">
                        Sẵn sàng bắt đầu?
                    </h2>
                    <p
                        className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
                        data-oid="e2wz:yc"
                    >
                        Tham gia cùng hàng nghìn doanh nghiệp đang sử dụng Glutisify để hiểu rõ hơn
                        về khách hàng của họ và tăng trưởng bền vững.
                    </p>
                    <div
                        className="flex flex-col sm:flex-row gap-6 justify-center"
                        data-oid="_fcntyl"
                    >
                        <button
                            className="group px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25"
                            data-oid="63iymbw"
                        >
                            <span
                                className="flex items-center justify-center gap-2"
                                data-oid="yzaki53"
                            >
                                🚀 Dùng thử 14 ngày miễn phí
                            </span>
                        </button>
                        <button
                            className="px-10 py-4 border-2 border-white/20 rounded-full text-lg font-semibold hover:bg-white/10 transition-all backdrop-blur-sm hover:border-white/40"
                            data-oid="yoixo__"
                        >
                            💬 Liên hệ tư vấn
                        </button>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer
                className="relative z-10 border-t border-white/10 py-16 px-8 mt-20 bg-black/20 backdrop-blur-xl"
                data-oid="z-uxog."
            >
                <div className="max-w-7xl mx-auto" data-oid="zjy-ro-">
                    <div className="grid md:grid-cols-4 gap-8 mb-12" data-oid="-317r5s">
                        <div className="md:col-span-2" data-oid="j1_nf1s">
                            <div
                                className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4"
                                data-oid="ok5uxmm"
                            >
                                Glutisify
                            </div>
                            <p
                                className="text-gray-400 mb-6 text-lg leading-relaxed"
                                data-oid="9_ju8pc"
                            >
                                Nền tảng dữ liệu khách hàng thông minh cho kỷ nguyên số. Giúp doanh
                                nghiệp hiểu rõ khách hàng và tăng trưởng bền vững.
                            </p>
                        </div>
                        <div data-oid="eklo.-_">
                            <h3 className="font-bold text-lg mb-4" data-oid="xzzult1">
                                Sản phẩm
                            </h3>
                            <ul className="space-y-2 text-gray-400" data-oid="qtrb1r.">
                                <li data-oid="qt3cg7k">
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                        data-oid="bp40cwk"
                                    >
                                        Tính năng
                                    </a>
                                </li>
                                <li data-oid="4:mktba">
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                        data-oid="c5m6k6b"
                                    >
                                        Giá cả
                                    </a>
                                </li>
                                <li data-oid="i2rl8gr">
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                        data-oid="byccja-"
                                    >
                                        API
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="jr55mem">
                            <h3 className="font-bold text-lg mb-4" data-oid="4tb:bxq">
                                Hỗ trợ
                            </h3>
                            <ul className="space-y-2 text-gray-400" data-oid="wyjd3td">
                                <li data-oid="lks2d0a">
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                        data-oid="::r1g64"
                                    >
                                        Tài liệu
                                    </a>
                                </li>
                                <li data-oid="l87323w">
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                        data-oid="fgp.jol"
                                    >
                                        Liên hệ
                                    </a>
                                </li>
                                <li data-oid="-q1gj06">
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                        data-oid="e5r3nyb"
                                    >
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center"
                        data-oid="x5d_eiz"
                    >
                        <div
                            className="flex space-x-8 text-sm text-gray-400 mb-4 md:mb-0"
                            data-oid="mc7qs1e"
                        >
                            <a
                                href="#"
                                className="hover:text-white transition-colors"
                                data-oid="ah_yp9p"
                            >
                                Chính sách bảo mật
                            </a>
                            <a
                                href="#"
                                className="hover:text-white transition-colors"
                                data-oid="ef9:7w5"
                            >
                                Điều khoản sử dụng
                            </a>
                            <a
                                href="#"
                                className="hover:text-white transition-colors"
                                data-oid="dh0xr.a"
                            >
                                Cookie
                            </a>
                        </div>
                        <p className="text-gray-400 text-sm" data-oid="9:llcu3">
                            © 2024 Glutisify. Tất cả quyền được bảo lưu.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
