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
            data-oid="8hbjpkq"
        >
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden" data-oid=".a3-kwm">
                <div
                    className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
                    style={{
                        left: mousePosition.x / 10,
                        top: mousePosition.y / 10,
                        transform: 'translate(-50%, -50%)',
                    }}
                    data-oid="p.5ywdl"
                />

                <div
                    className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"
                    data-oid="nr79u_-"
                />

                <div
                    className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"
                    data-oid="i.r9-hs"
                />
            </div>

            {/* Navigation */}
            <nav
                className="relative z-50 py-6 px-8 flex justify-between items-center backdrop-blur-xl bg-white/5 border-b border-white/10 shadow-2xl"
                data-oid="z91zu:2"
            >
                <div
                    className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                    data-oid="vo:vue9"
                >
                    Glutisify
                </div>
                <div className="hidden md:flex space-x-8" data-oid="wdn:gs7">
                    <a href="#features" className="relative group" data-oid="u9933hq">
                        <span
                            className="hover:text-blue-400 transition-all duration-300"
                            data-oid="byes5_m"
                        >
                            Tính năng
                        </span>
                        <div
                            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"
                            data-oid="hfjusac"
                        />
                    </a>
                    <a href="#pricing" className="relative group" data-oid="w3jbdbb">
                        <span
                            className="hover:text-blue-400 transition-all duration-300"
                            data-oid="j1fhau9"
                        >
                            Giá cả
                        </span>
                        <div
                            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"
                            data-oid="73leua1"
                        />
                    </a>
                    <a href="#contact" className="relative group" data-oid="98gl:zl">
                        <span
                            className="hover:text-blue-400 transition-all duration-300"
                            data-oid="i4r4na9"
                        >
                            Liên hệ
                        </span>
                        <div
                            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"
                            data-oid="jeff6v0"
                        />
                    </a>
                </div>
                <button
                    className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold"
                    data-oid="485nmq9"
                >
                    Dùng thử miễn phí
                </button>
            </nav>

            {/* Hero Section */}
            <main className="relative z-10 max-w-7xl mx-auto px-8 py-20" data-oid="y3wcg:b">
                <div
                    className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    data-oid="dcd1k8k"
                >
                    <div className="mb-6" data-oid="225vu-9">
                        <span
                            className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-sm font-medium backdrop-blur-sm"
                            data-oid="xwuptua"
                        >
                            🚀 Nền tảng AI hàng đầu Việt Nam
                        </span>
                    </div>

                    <h1
                        className="text-6xl md:text-8xl font-bold leading-tight mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
                        data-oid="7h.c8-7"
                    >
                        Nền tảng dữ liệu khách hàng
                        <br data-oid="a7iv9k:" />
                        <span
                            className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse"
                            data-oid="tohpdd4"
                        >
                            toàn diện
                        </span>
                    </h1>

                    <p
                        className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
                        data-oid="wd_twg6"
                    >
                        Tích hợp và phân tích dữ liệu khách hàng từ tất cả các mạng xã hội.
                        <br className="hidden md:block" data-oid="tqs:ym2" />
                        Hiểu rõ hơn về khách hàng của bạn với AI và machine learning tiên tiến.
                    </p>

                    <div
                        className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
                        data-oid="x_om1nq"
                    >
                        <button
                            className="group px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25"
                            data-oid="3yqsbey"
                        >
                            <span
                                className="flex items-center justify-center gap-2"
                                data-oid="l2-uz6z"
                            >
                                Bắt đầu ngay
                                <span
                                    className="group-hover:translate-x-1 transition-transform"
                                    data-oid=".lh9lm8"
                                >
                                    →
                                </span>
                            </span>
                        </button>
                        <button
                            className="px-10 py-4 border-2 border-white/20 rounded-full text-lg font-semibold hover:bg-white/10 transition-all backdrop-blur-sm hover:border-white/40"
                            data-oid="8-t_e-p"
                        >
                            <span
                                className="flex items-center justify-center gap-2"
                                data-oid="xeqcrcd"
                            >
                                ▶️ Xem demo
                            </span>
                        </button>
                    </div>
                </div>

                {/* Social Platforms Grid */}
                <div
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-24"
                    data-oid="beenc5k"
                >
                    {socialPlatforms.map((platform, index) => (
                        <div
                            key={platform.name}
                            className={`group bg-white/5 backdrop-blur-xl rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 border border-white/10 hover:border-white/20 shadow-xl hover:shadow-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                            data-oid=":wkxd8j"
                        >
                            <div
                                className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300"
                                data-oid="5cf218r"
                            >
                                {platform.icon}
                            </div>
                            <h3 className="font-bold mb-2 text-lg" data-oid="jlmx.rk">
                                {platform.name}
                            </h3>
                            <p
                                className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors"
                                data-oid="kj.:czq"
                            >
                                {platform.users} users
                            </p>
                            <div
                                className={`mt-3 h-1 bg-gradient-to-r ${platform.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                                data-oid="w7vui1n"
                            />
                        </div>
                    ))}
                </div>

                {/* Features Section */}
                <section id="features" className="mb-24" data-oid="38dma2t">
                    <div className="text-center mb-16" data-oid="jap4i-8">
                        <h2 className="text-5xl md:text-6xl font-bold mb-6" data-oid="uhgslfk">
                            Tính năng{' '}
                            <span
                                className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                                data-oid="li21uck"
                            >
                                nổi bật
                            </span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto" data-oid="iw_57ws">
                            Khám phá những tính năng mạnh mẽ giúp bạn hiểu rõ khách hàng hơn bao giờ
                            hết
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8" data-oid="rvr2u0y">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group bg-white/5 backdrop-blur-xl rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-white/20 shadow-xl hover:shadow-2xl transform hover:-translate-y-2"
                                data-oid="w393kve"
                            >
                                <div
                                    className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                                    data-oid="m5bl5hz"
                                >
                                    {feature.icon}
                                </div>
                                <h3
                                    className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors"
                                    data-oid="ld53i4f"
                                >
                                    {feature.title}
                                </h3>
                                <p
                                    className="text-gray-300 leading-relaxed text-lg"
                                    data-oid="3c1n9kl"
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
                    data-oid="_9fl_wj"
                >
                    <div className="grid md:grid-cols-4 gap-8 text-center" data-oid="r0k09gx">
                        <div className="group" data-oid="i-7gd_9">
                            <div
                                className="text-5xl font-bold text-blue-400 mb-3 group-hover:scale-110 transition-transform duration-300"
                                data-oid="kx:4i8x"
                            >
                                10M+
                            </div>
                            <div className="text-gray-300 text-lg font-medium" data-oid="_og.zg0">
                                Hồ sơ khách hàng
                            </div>
                        </div>
                        <div className="group" data-oid="83vn-vp">
                            <div
                                className="text-5xl font-bold text-purple-400 mb-3 group-hover:scale-110 transition-transform duration-300"
                                data-oid="1n6veh4"
                            >
                                50+
                            </div>
                            <div className="text-gray-300 text-lg font-medium" data-oid="x4ywcog">
                                Nền tảng tích hợp
                            </div>
                        </div>
                        <div className="group" data-oid="aovh_g8">
                            <div
                                className="text-5xl font-bold text-pink-400 mb-3 group-hover:scale-110 transition-transform duration-300"
                                data-oid="97n07-g"
                            >
                                99.9%
                            </div>
                            <div className="text-gray-300 text-lg font-medium" data-oid="zwndjl9">
                                Uptime
                            </div>
                        </div>
                        <div className="group" data-oid="g6s8n6m">
                            <div
                                className="text-5xl font-bold text-green-400 mb-3 group-hover:scale-110 transition-transform duration-300"
                                data-oid="o99nbsq"
                            >
                                24/7
                            </div>
                            <div className="text-gray-300 text-lg font-medium" data-oid="7zsn3mc">
                                Hỗ trợ khách hàng
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="mb-24 relative" data-oid="6ojs1jv">
                    {/* Background decoration */}
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl blur-3xl"
                        data-oid="_mn6w3r"
                    ></div>

                    <div className="relative z-10" data-oid="m2zpii1">
                        <div className="text-center mb-20" data-oid="6xx4nog">
                            <div
                                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-sm font-medium backdrop-blur-sm mb-6"
                                data-oid="wzj.e6b"
                            >
                                ⭐ Testimonials
                            </div>
                            <h2 className="text-5xl md:text-6xl font-bold mb-6" data-oid="01u048l">
                                Khách hàng nói gì về{' '}
                                <span
                                    className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                                    data-oid="kbw_his"
                                >
                                    Glutisify
                                </span>
                            </h2>
                            <p
                                className="text-xl text-gray-400 max-w-3xl mx-auto"
                                data-oid="-av4p5n"
                            >
                                Hàng nghìn doanh nghiệp tin tưởng và đạt được kết quả vượt trội với
                                Glutisify
                            </p>
                        </div>

                        <div
                            className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
                            data-oid="g-58_w6"
                        >
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:bg-white/10 transform hover:-translate-y-2 hover:scale-[1.02] shadow-2xl hover:shadow-blue-500/10"
                                    data-oid="a8:q9mm"
                                >
                                    {/* Decorative elements */}
                                    <div
                                        className="absolute top-4 right-4 text-6xl text-blue-400/20 group-hover:text-blue-400/40 transition-colors duration-300"
                                        data-oid="j7xo7jj"
                                    >
                                        "
                                    </div>
                                    <div
                                        className="absolute -top-2 -left-2 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"
                                        data-oid="jvw4pxc"
                                    ></div>

                                    {/* Rating stars */}
                                    <div className="flex gap-1 mb-6" data-oid="d.0ff.a">
                                        {[...Array(5)].map((_, i) => (
                                            <span
                                                key={i}
                                                className="text-yellow-400 text-lg"
                                                data-oid="7bi560i"
                                            >
                                                ⭐
                                            </span>
                                        ))}
                                    </div>

                                    {/* Quote content */}
                                    <div className="relative z-10 mb-8" data-oid="2oxi_cr">
                                        <p
                                            className="text-gray-200 leading-relaxed text-lg font-medium relative"
                                            data-oid="h0ol1-q"
                                        >
                                            <span
                                                className="text-blue-400 text-2xl absolute -left-2 -top-2"
                                                data-oid="ingi39c"
                                            >
                                                "
                                            </span>
                                            <span className="ml-4" data-oid="fio02cq">
                                                {testimonial.content}
                                            </span>
                                            <span
                                                className="text-blue-400 text-2xl"
                                                data-oid=":89gjme"
                                            >
                                                "
                                            </span>
                                        </p>
                                    </div>

                                    {/* Author info */}
                                    <div
                                        className="flex items-center relative z-10"
                                        data-oid="5evc:ey"
                                    >
                                        <div className="relative" data-oid="9x6ub:o">
                                            <div
                                                className="w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl mr-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300"
                                                data-oid="2593_60"
                                            >
                                                {testimonial.avatar}
                                            </div>
                                            <div
                                                className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center"
                                                data-oid="-j:jhhx"
                                            >
                                                <span className="text-xs" data-oid="ne5493a">
                                                    ✓
                                                </span>
                                            </div>
                                        </div>
                                        <div
                                            className="flex flex-col justify-center"
                                            data-oid="n0zng4k"
                                        >
                                            <h4
                                                className="font-bold text-xl text-white group-hover:text-blue-300 transition-colors duration-300"
                                                data-oid="z2ccxcw"
                                            >
                                                {testimonial.name}
                                            </h4>
                                            <p
                                                className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 font-medium"
                                                data-oid="5:k2e7s"
                                            >
                                                {testimonial.role}
                                            </p>
                                            <div
                                                className="flex items-center gap-2 mt-1"
                                                data-oid="n9.oz-d"
                                            >
                                                <div
                                                    className="w-2 h-2 bg-green-400 rounded-full animate-pulse"
                                                    data-oid="u1ib9wu"
                                                ></div>
                                                <span
                                                    className="text-xs text-green-400 font-medium"
                                                    data-oid="snj-pon"
                                                >
                                                    Verified Customer
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hover effect overlay */}
                                    <div
                                        className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -left-[79px] -top-[27px]"
                                        data-oid="uz9ftfr"
                                    ></div>
                                </div>
                            ))}
                        </div>

                        {/* Additional social proof */}
                        <div className="mt-16 text-center" data-oid="q-8.nbq">
                            <div
                                className="inline-flex items-center gap-8 px-8 py-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10"
                                data-oid=":-3i5tr"
                            >
                                <div className="text-center" data-oid=":tewmot">
                                    <div
                                        className="text-2xl font-bold text-blue-400"
                                        data-oid="e9ylzf8"
                                    >
                                        4.9/5
                                    </div>
                                    <div className="text-sm text-gray-400" data-oid=".yt-rz2">
                                        Rating
                                    </div>
                                </div>
                                <div className="w-px h-8 bg-white/20" data-oid="wbhprwm"></div>
                                <div className="text-center" data-oid="_2ezle7">
                                    <div
                                        className="text-2xl font-bold text-purple-400"
                                        data-oid="zxxfj8z"
                                    >
                                        1000+
                                    </div>
                                    <div className="text-sm text-gray-400" data-oid="t3:6rcu">
                                        Reviews
                                    </div>
                                </div>
                                <div className="w-px h-8 bg-white/20" data-oid="evgoyam"></div>
                                <div className="text-center" data-oid="9giiofh">
                                    <div
                                        className="text-2xl font-bold text-pink-400"
                                        data-oid="fy7_3mt"
                                    >
                                        99%
                                    </div>
                                    <div className="text-sm text-gray-400" data-oid="rrpgei3">
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
                    data-oid="j9rf0ar"
                >
                    <h2 className="text-5xl font-bold mb-6" data-oid=":jw324f">
                        Sẵn sàng bắt đầu?
                    </h2>
                    <p
                        className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
                        data-oid="ki5nbrc"
                    >
                        Tham gia cùng hàng nghìn doanh nghiệp đang sử dụng Glutisify để hiểu rõ hơn
                        về khách hàng của họ và tăng trưởng bền vững.
                    </p>
                    <div
                        className="flex flex-col sm:flex-row gap-6 justify-center"
                        data-oid="aeva3.5"
                    >
                        <button
                            className="group px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25"
                            data-oid="e3ubiew"
                        >
                            <span
                                className="flex items-center justify-center gap-2"
                                data-oid="4xs-rm:"
                            >
                                🚀 Dùng thử 14 ngày miễn phí
                            </span>
                        </button>
                        <button
                            className="px-10 py-4 border-2 border-white/20 rounded-full text-lg font-semibold hover:bg-white/10 transition-all backdrop-blur-sm hover:border-white/40"
                            data-oid="xpbg0xb"
                        >
                            💬 Liên hệ tư vấn
                        </button>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer
                className="relative z-10 border-t border-white/10 py-16 px-8 mt-20 bg-black/20 backdrop-blur-xl"
                data-oid="358ktqz"
            >
                <div className="max-w-7xl mx-auto" data-oid="l-5yrly">
                    <div className="grid md:grid-cols-4 gap-8 mb-12" data-oid="7w6hk2i">
                        <div className="md:col-span-2" data-oid="v0x1atl">
                            <div
                                className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4"
                                data-oid="d5r7n1:"
                            >
                                Glutisify
                            </div>
                            <p
                                className="text-gray-400 mb-6 text-lg leading-relaxed"
                                data-oid="mtigx:r"
                            >
                                Nền tảng dữ liệu khách hàng thông minh cho kỷ nguyên số. Giúp doanh
                                nghiệp hiểu rõ khách hàng và tăng trưởng bền vững.
                            </p>
                        </div>
                        <div data-oid="f8jrvvu">
                            <h3 className="font-bold text-lg mb-4" data-oid="2nnxx1c">
                                Sản phẩm
                            </h3>
                            <ul className="space-y-2 text-gray-400" data-oid="i:4e41k">
                                <li data-oid="hfiwj_f">
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                        data-oid="p4i-13w"
                                    >
                                        Tính năng
                                    </a>
                                </li>
                                <li data-oid="bjzujh7">
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                        data-oid="ow4zezj"
                                    >
                                        Giá cả
                                    </a>
                                </li>
                                <li data-oid="ifrblt.">
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                        data-oid="e5hh2ww"
                                    >
                                        API
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="i-t3apk">
                            <h3 className="font-bold text-lg mb-4" data-oid="uq9dhfe">
                                Hỗ trợ
                            </h3>
                            <ul className="space-y-2 text-gray-400" data-oid="9jqb:6a">
                                <li data-oid=".2t8gbg">
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                        data-oid=".p4sd:e"
                                    >
                                        Tài liệu
                                    </a>
                                </li>
                                <li data-oid="1qg41_q">
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                        data-oid="_cc9a-b"
                                    >
                                        Liên hệ
                                    </a>
                                </li>
                                <li data-oid="e2qca6s">
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                        data-oid="8.i6b:1"
                                    >
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center"
                        data-oid="i:678gv"
                    >
                        <div
                            className="flex space-x-8 text-sm text-gray-400 mb-4 md:mb-0"
                            data-oid="xi-ps41"
                        >
                            <a
                                href="#"
                                className="hover:text-white transition-colors"
                                data-oid="e6_m1id"
                            >
                                Chính sách bảo mật
                            </a>
                            <a
                                href="#"
                                className="hover:text-white transition-colors"
                                data-oid="n8rl724"
                            >
                                Điều khoản sử dụng
                            </a>
                            <a
                                href="#"
                                className="hover:text-white transition-colors"
                                data-oid="me6py.o"
                            >
                                Cookie
                            </a>
                        </div>
                        <p className="text-gray-400 text-sm" data-oid="i1k5v7:">
                            © 2024 Glutisify. Tất cả quyền được bảo lưu.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
