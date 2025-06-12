'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PricingPage() {
    const [isVisible, setIsVisible] = useState(false);
    const [isAnnual, setIsAnnual] = useState(false);
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        setIsVisible(true);

        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 500);
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const pricingPlans = [
        {
            name: 'Starter',
            description: 'Hoàn hảo cho startup và doanh nghiệp nhỏ',
            monthlyPrice: 299000,
            annualPrice: 2990000,
            features: [
                'Tích hợp 5 nền tảng mạng xã hội',
                'Phân tích cơ bản',
                'Báo cáo hàng tuần',
                'Hỗ trợ email',
                'Lưu trữ 1GB dữ liệu',
                'Tối đa 1,000 hồ sơ khách hàng',
            ],

            popular: false,
            color: 'from-blue-500 to-cyan-500',
        },
        {
            name: 'Professional',
            description: 'Dành cho doanh nghiệp đang phát triển',
            monthlyPrice: 799000,
            annualPrice: 7990000,
            features: [
                'Tích hợp 15 nền tảng mạng xã hội',
                'Phân tích AI nâng cao',
                'Báo cáo real-time',
                'Hỗ trợ 24/7',
                'Lưu trữ 10GB dữ liệu',
                'Tối đa 10,000 hồ sơ khách hàng',
                'API tùy chỉnh',
                'Dashboard tùy chỉnh',
            ],

            popular: true,
            color: 'from-purple-500 to-pink-500',
        },
        {
            name: 'Enterprise',
            description: 'Giải pháp toàn diện cho doanh nghiệp lớn',
            monthlyPrice: 1999000,
            annualPrice: 19990000,
            features: [
                'Tích hợp không giới hạn',
                'AI và ML tùy chỉnh',
                'Báo cáo và phân tích nâng cao',
                'Dedicated support manager',
                'Lưu trữ không giới hạn',
                'Hồ sơ khách hàng không giới hạn',
                'White-label solution',
                'On-premise deployment',
                'Training và consulting',
            ],

            popular: false,
            color: 'from-green-500 to-emerald-500',
        },
    ];

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        }).format(price);
    };

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden"
            data-oid="99n8u3_"
        >
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden" data-oid="q-15ncw">
                <div
                    className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"
                    data-oid="4yqql3i"
                />

                <div
                    className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"
                    data-oid="rmar2qm"
                />
            </div>

            {/* Navigation */}
            <nav
                className="relative z-50 py-6 px-8 flex justify-between items-center backdrop-blur-xl bg-white/5 border-b border-white/10 shadow-2xl"
                data-oid="l92dk9r"
            >
                <Link
                    href="/"
                    className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                    data-oid="._9aapa"
                >
                    Glutisify
                </Link>
                <div className="hidden md:flex space-x-8" data-oid="kt6v2xs">
                    <Link href="/#features" className="relative group" data-oid="up-.2vx">
                        <span
                            className="hover:text-blue-400 transition-all duration-300"
                            data-oid="t-ox4cv"
                        >
                            Tính năng
                        </span>
                        <div
                            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"
                            data-oid="v9j:xoq"
                        />
                    </Link>
                    <Link href="/pricing" className="relative group" data-oid="2www1rf">
                        <span
                            className="text-blue-400 transition-all duration-300"
                            data-oid="0mn3zy."
                        >
                            Giá cả
                        </span>
                        <div
                            className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"
                            data-oid="cpvvp4r"
                        />
                    </Link>
                    <Link href="/contact" className="relative group" data-oid="075lf.o">
                        <span
                            className="hover:text-blue-400 transition-all duration-300"
                            data-oid="-5q_3om"
                        >
                            Liên hệ
                        </span>
                        <div
                            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"
                            data-oid="9k.-beo"
                        />
                    </Link>
                </div>
                <Link
                    href="/contact"
                    className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold"
                    data-oid="_l5r1_2"
                >
                    Dùng thử miễn phí
                </Link>
            </nav>

            {/* Main Content */}
            <main className="relative z-10 max-w-7xl mx-auto px-8 py-20" data-oid="-4wwdda">
                {/* Header */}
                <div
                    className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    data-oid=":.twl29"
                >
                    <div className="mb-6" data-oid="_mpjzak">
                        <span
                            className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-sm font-medium backdrop-blur-sm"
                            data-oid="5rl:yle"
                        >
                            💰 Bảng giá
                        </span>
                    </div>
                    <h1
                        className="text-5xl md:text-7xl font-bold leading-tight mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
                        data-oid="ch50-:8"
                    >
                        Chọn gói phù hợp với{' '}
                        <span
                            className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                            data-oid="806:._n"
                        >
                            doanh nghiệp
                        </span>
                    </h1>
                    <p
                        className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
                        data-oid="pxo-3w1"
                    >
                        Từ startup đến doanh nghiệp lớn, chúng tôi có giải pháp phù hợp cho mọi quy
                        mô
                    </p>

                    {/* Pricing Toggle */}
                    <div
                        className="flex items-center justify-center gap-4 mb-12"
                        data-oid="-9liuxk"
                    >
                        <span
                            className={`text-lg font-medium ${!isAnnual ? 'text-white' : 'text-gray-400'}`}
                            data-oid="7_zgqxy"
                        >
                            Hàng tháng
                        </span>
                        <button
                            onClick={() => setIsAnnual(!isAnnual)}
                            className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${isAnnual ? 'bg-gradient-to-r from-blue-500 to-purple-600' : 'bg-gray-600'}`}
                            data-oid="s661if3"
                        >
                            <div
                                className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${isAnnual ? 'translate-x-9' : 'translate-x-1'}`}
                                data-oid="zimh5xl"
                            />
                        </button>
                        <span
                            className={`text-lg font-medium ${isAnnual ? 'text-white' : 'text-gray-400'}`}
                            data-oid="1nrgxi:"
                        >
                            Hàng năm
                        </span>
                        {isAnnual && (
                            <span
                                className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-full text-sm font-medium text-green-400"
                                data-oid="hgwisa2"
                            >
                                Tiết kiệm 20%
                            </span>
                        )}
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-16" data-oid=":f0ch-z">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={plan.name}
                            className={`relative group bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl rounded-3xl p-8 border transition-all duration-500 hover:bg-white/10 transform hover:-translate-y-2 hover:scale-[1.02] shadow-2xl ${
                                plan.popular
                                    ? 'border-purple-400/50 hover:border-purple-400/70 shadow-purple-500/20'
                                    : 'border-white/20 hover:border-white/40'
                            } ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                            data-oid="btl1dsm"
                        >
                            {plan.popular && (
                                <div
                                    className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                                    data-oid="-7w04e."
                                >
                                    <span
                                        className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold text-white shadow-lg"
                                        data-oid=".l5r32f"
                                    >
                                        Phổ biến nhất
                                    </span>
                                </div>
                            )}

                            <div className="text-center mb-8" data-oid="44m7.aq">
                                <h3 className="text-2xl font-bold mb-2" data-oid="nz3p8t:">
                                    {plan.name}
                                </h3>
                                <p className="text-gray-400 mb-6" data-oid="wr5fp9c">
                                    {plan.description}
                                </p>

                                <div className="mb-6" data-oid="k.y5:gq">
                                    <div className="text-5xl font-bold mb-2" data-oid="4wasngz">
                                        {formatPrice(
                                            isAnnual ? plan.annualPrice / 12 : plan.monthlyPrice,
                                        )}
                                    </div>
                                    <div className="text-gray-400" data-oid="-vebpvh">
                                        {isAnnual ? 'mỗi tháng (thanh toán hàng năm)' : 'mỗi tháng'}
                                    </div>
                                    {isAnnual && (
                                        <div
                                            className="text-sm text-green-400 mt-2"
                                            data-oid="1enewyp"
                                        >
                                            Tiết kiệm{' '}
                                            {formatPrice(plan.monthlyPrice * 12 - plan.annualPrice)}{' '}
                                            mỗi năm
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-4 mb-8" data-oid=":k2:n73">
                                {plan.features.map((feature, featureIndex) => (
                                    <div
                                        key={featureIndex}
                                        className="flex items-center gap-3"
                                        data-oid="dgw4bvs"
                                    >
                                        <div
                                            className={`w-5 h-5 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center flex-shrink-0`}
                                            data-oid="q-xxp-:"
                                        >
                                            <span className="text-white text-xs" data-oid="q3i.wtf">
                                                ✓
                                            </span>
                                        </div>
                                        <span className="text-gray-300" data-oid="8597yl9">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <button
                                className={`w-full py-4 rounded-2xl font-semibold transition-all duration-300 ${
                                    plan.popular
                                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-purple-500/25'
                                        : 'border-2 border-white/20 hover:bg-white/10 hover:border-white/40 text-white'
                                }`}
                                data-oid="ez::5nw"
                            >
                                Bắt đầu với {plan.name}
                            </button>
                        </div>
                    ))}
                </div>

                {/* FAQ Section */}
                <section
                    className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl"
                    data-oid="juvcxxp"
                >
                    <div className="text-center mb-12" data-oid="v476053">
                        <h2 className="text-4xl font-bold mb-4" data-oid="3.dx_ds">
                            Câu hỏi thường gặp
                        </h2>
                        <p className="text-xl text-gray-400" data-oid="1.vg4zz">
                            Những thắc mắc phổ biến về dịch vụ của chúng tôi
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8" data-oid="0-0ut1:">
                        <div className="space-y-6" data-oid="uywz_8g">
                            <div data-oid="vfrqb3v">
                                <h3
                                    className="text-xl font-bold mb-3 text-blue-400"
                                    data-oid="o:kcmw_"
                                >
                                    Có thể thay đổi gói dịch vụ không?
                                </h3>
                                <p className="text-gray-300" data-oid="jk1eyw_">
                                    Có, bạn có thể nâng cấp hoặc hạ cấp gói dịch vụ bất cứ lúc nào.
                                    Thay đổi sẽ có hiệu lực ngay lập tức.
                                </p>
                            </div>
                            <div data-oid="z6404zj">
                                <h3
                                    className="text-xl font-bold mb-3 text-purple-400"
                                    data-oid=".t0dpo-"
                                >
                                    Có hỗ trợ dùng thử miễn phí không?
                                </h3>
                                <p className="text-gray-300" data-oid=":64ji1z">
                                    Có, tất cả gói dịch vụ đều có 14 ngày dùng thử miễn phí, không
                                    cần thẻ tín dụng.
                                </p>
                            </div>
                            <div data-oid=":odapsn">
                                <h3
                                    className="text-xl font-bold mb-3 text-pink-400"
                                    data-oid="bh31hwv"
                                >
                                    Dữ liệu có được bảo mật không?
                                </h3>
                                <p className="text-gray-300" data-oid="b04m249">
                                    Chúng tôi sử dụng mã hóa AES-256 và tuân thủ các tiêu chuẩn bảo
                                    mật quốc tế như ISO 27001.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-6" data-oid="ftsrtdu">
                            <div data-oid="-x5xzav">
                                <h3
                                    className="text-xl font-bold mb-3 text-green-400"
                                    data-oid="pllx:so"
                                >
                                    Có hỗ trợ tích hợp API không?
                                </h3>
                                <p className="text-gray-300" data-oid="v1xfi-v">
                                    Có, chúng tôi cung cấp API RESTful đầy đủ và SDK cho các ngôn
                                    ngữ phổ biến.
                                </p>
                            </div>
                            <div data-oid="-:i4y-g">
                                <h3
                                    className="text-xl font-bold mb-3 text-cyan-400"
                                    data-oid="x0eex1g"
                                >
                                    Thanh toán như thế nào?
                                </h3>
                                <p className="text-gray-300" data-oid="grpwskc">
                                    Chúng tôi chấp nhận thanh toán qua thẻ tín dụng, chuyển khoản
                                    ngân hàng và ví điện tử.
                                </p>
                            </div>
                            <div data-oid="hedlbe-">
                                <h3
                                    className="text-xl font-bold mb-3 text-yellow-400"
                                    data-oid="qr-9inq"
                                >
                                    Có hỗ trợ khách hàng 24/7 không?
                                </h3>
                                <p className="text-gray-300" data-oid="scj9l1z">
                                    Gói Professional và Enterprise có hỗ trợ 24/7. Gói Starter có hỗ
                                    trợ trong giờ hành chính.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section
                    className="text-center mt-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl rounded-3xl p-16 border border-white/20"
                    data-oid="p5gn:.s"
                >
                    <h2 className="text-4xl font-bold mb-6" data-oid=".xfuorv">
                        Bắt đầu hành trình của bạn ngay hôm nay
                    </h2>
                    <p
                        className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
                        data-oid="quo049."
                    >
                        Tham gia cùng hàng nghìn doanh nghiệp đang sử dụng Glutisify để hiểu rõ hơn
                        về khách hàng
                    </p>
                    <div
                        className="flex flex-col sm:flex-row gap-6 justify-center"
                        data-oid="fdwepx3"
                    >
                        <Link
                            href="/contact"
                            className="group px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25"
                            data-oid=":m4jdwo"
                        >
                            <span
                                className="flex items-center justify-center gap-2"
                                data-oid="pls9y75"
                            >
                                🚀 Dùng thử 14 ngày miễn phí
                            </span>
                        </Link>
                        <Link
                            href="/contact"
                            className="px-10 py-4 border-2 border-white/20 rounded-full text-lg font-semibold hover:bg-white/10 transition-all backdrop-blur-sm hover:border-white/40"
                            data-oid="8ti9.hd"
                        >
                            💬 Liên hệ tư vấn
                        </Link</div>
                </section>
            </main>

            {/* Back to Top Button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-110 flex items-center justify-center group ${
                    showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
                aria-label="Back to top"
            >
                <svg
                    className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                </svg>
            </button>
        </div>
    );
}
