'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ContactPage() {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        service: 'starter',
    });

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong vòng 24 giờ.');
    };

    const contactInfo = [
        {
            icon: '📧',
            title: 'Email',
            content: 'hello@glutisify.com',
            description: 'Gửi email cho chúng tôi bất cứ lúc nào',
        },
        {
            icon: '📞',
            title: 'Điện thoại',
            content: '+84 28 1234 5678',
            description: 'Thứ 2 - Thứ 6, 9:00 - 18:00',
        },
        {
            icon: '📍',
            title: 'Địa chỉ',
            content: 'Tầng 10, Tòa nhà ABC, Quận 1, TP.HCM',
            description: 'Ghé thăm văn phòng của chúng tôi',
        },
        {
            icon: '💬',
            title: 'Live Chat',
            content: 'Trò chuyện trực tiếp',
            description: 'Hỗ trợ 24/7 cho khách hàng Enterprise',
        },
    ];

    const teamMembers = [
        {
            name: 'Nguyễn Văn A',
            role: 'CEO & Founder',
            avatar: '👨‍💼',
            email: 'ceo@glutisify.com',
        },
        {
            name: 'Trần Thị B',
            role: 'Head of Sales',
            avatar: '👩‍💼',
            email: 'sales@glutisify.com',
        },
        {
            name: 'Lê Văn C',
            role: 'Technical Lead',
            avatar: '👨‍💻',
            email: 'tech@glutisify.com',
        },
        {
            name: 'Phạm Thị D',
            role: 'Customer Success',
            avatar: '👩‍🎓',
            email: 'support@glutisify.com',
        },
    ];

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden"
            data-oid=":wdj:co"
        >
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden" data-oid="xd4lc52">
                <div
                    className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"
                    data-oid="c-xjr:f"
                />

                <div
                    className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"
                    data-oid="11t_v2i"
                />
            </div>

            {/* Navigation */}
            <nav
                className="relative z-50 py-6 px-8 flex justify-between items-center backdrop-blur-xl bg-white/5 border-b border-white/10 shadow-2xl"
                data-oid="v.lvc:k"
            >
                <Link
                    href="/"
                    className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                    data-oid="f..p9gw"
                >
                    Glutisify
                </Link>
                <div className="hidden md:flex space-x-8" data-oid="1s9wndx">
                    <Link href="/#features" className="relative group" data-oid="efqmwrs">
                        <span
                            className="hover:text-blue-400 transition-all duration-300"
                            data-oid="--tbk77"
                        >
                            Tính năng
                        </span>
                        <div
                            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"
                            data-oid=".h5xflo"
                        />
                    </Link>
                    <Link href="/pricing" className="relative group" data-oid="4kin8-o">
                        <span
                            className="hover:text-blue-400 transition-all duration-300"
                            data-oid="1eu.e-d"
                        >
                            Giá cả
                        </span>
                        <div
                            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"
                            data-oid="lc7-..t"
                        />
                    </Link>
                    <Link href="/contact" className="relative group" data-oid="cee9roh">
                        <span
                            className="text-blue-400 transition-all duration-300"
                            data-oid="nqrsl.k"
                        >
                            Liên hệ
                        </span>
                        <div
                            className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"
                            data-oid="hm80q48"
                        />
                    </Link>
                </div>
                <Link
                    href="/contact"
                    className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold"
                    data-oid="4kxczkh"
                >
                    Dùng thử miễn phí
                </Link>
            </nav>

            {/* Main Content */}
            <main className="relative z-10 max-w-7xl mx-auto px-8 py-20" data-oid="q35sv9f">
                {/* Header */}
                <div
                    className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    data-oid="ovhq16d"
                >
                    <div className="mb-6" data-oid="2796-uz">
                        <span
                            className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-sm font-medium backdrop-blur-sm"
                            data-oid="xmqpz18"
                        >
                            📞 Liên hệ
                        </span>
                    </div>
                    <h1
                        className="text-5xl md:text-7xl font-bold leading-tight mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
                        data-oid="xk8puxd"
                    >
                        Hãy để chúng tôi{' '}
                        <span
                            className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                            data-oid="ffl67t8"
                        >
                            hỗ trợ bạn
                        </span>
                    </h1>
                    <p
                        className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
                        data-oid="edv1kyf"
                    >
                        Đội ngũ chuyên gia của chúng tôi sẵn sàng tư vấn và hỗ trợ bạn tìm ra giải
                        pháp tốt nhất
                    </p>
                </div>

                {/* Contact Info Cards */}
                <div className="grid md:grid-cols-4 gap-6 mb-16" data-oid="o928kgs">
                    {contactInfo.map((info, index) => (
                        <div
                            key={index}
                            className={`group bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl rounded-3xl p-6 border border-white/20 hover:border-white/40 transition-all duration-500 hover:bg-white/10 transform hover:-translate-y-2 shadow-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                            data-oid="-mar9me"
                        >
                            <div
                                className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                                data-oid="162a7.u"
                            >
                                {info.icon}
                            </div>
                            <h3
                                className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors"
                                data-oid="pfntkk1"
                            >
                                {info.title}
                            </h3>
                            <p
                                className="text-lg font-medium mb-2 text-blue-300"
                                data-oid=":ajw08y"
                            >
                                {info.content}
                            </p>
                            <p className="text-sm text-gray-400" data-oid="_k-hzh-">
                                {info.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Contact Form and Team */}
                <div className="grid lg:grid-cols-2 gap-12 mb-16" data-oid="089-kow">
                    {/* Contact Form */}
                    <div
                        className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl rounded-3xl p-8 border border-white/20 shadow-2xl"
                        data-oid="0771wlv"
                    >
                        <h2 className="text-3xl font-bold mb-6 text-center" data-oid="ys_c6xy">
                            Gửi tin nhắn cho chúng tôi
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6" data-oid="modclkx">
                            <div className="grid md:grid-cols-2 gap-4" data-oid="f4p1.cw">
                                <div data-oid="zeuw-s.">
                                    <label
                                        className="block text-sm font-medium mb-2"
                                        data-oid="e00akr8"
                                    >
                                        Họ và tên *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:border-blue-400 focus:outline-none transition-colors backdrop-blur-sm"
                                        placeholder="Nhập họ và tên"
                                        data-oid="yh27pm."
                                    />
                                </div>
                                <div data-oid=".bss5hu">
                                    <label
                                        className="block text-sm font-medium mb-2"
                                        data-oid="a9.3.2e"
                                    >
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:border-blue-400 focus:outline-none transition-colors backdrop-blur-sm"
                                        placeholder="your@email.com"
                                        data-oid="fmk:pau"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4" data-oid="z06m8o:">
                                <div data-oid="48u7bm_">
                                    <label
                                        className="block text-sm font-medium mb-2"
                                        data-oid="y73m-a3"
                                    >
                                        Công ty
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:border-blue-400 focus:outline-none transition-colors backdrop-blur-sm"
                                        placeholder="Tên công ty"
                                        data-oid="fvmwvv3"
                                    />
                                </div>
                                <div data-oid="uqy6hkt">
                                    <label
                                        className="block text-sm font-medium mb-2"
                                        data-oid=".d:kpyo"
                                    >
                                        Số điện thoại
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:border-blue-400 focus:outline-none transition-colors backdrop-blur-sm"
                                        placeholder="+84 xxx xxx xxx"
                                        data-oid="v_1:zvz"
                                    />
                                </div>
                            </div>

                            <div data-oid="0th_zg-">
                                <label
                                    className="block text-sm font-medium mb-2"
                                    data-oid="w9w7ap."
                                >
                                    Gói dịch vụ quan tâm
                                </label>
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:border-blue-400 focus:outline-none transition-colors backdrop-blur-sm"
                                    data-oid="ule91ej"
                                >
                                    <option value="starter" data-oid="dz.sb-j">
                                        Starter
                                    </option>
                                    <option value="professional" data-oid="t.hu4na">
                                        Professional
                                    </option>
                                    <option value="enterprise" data-oid="jmrcta0">
                                        Enterprise
                                    </option>
                                    <option value="custom" data-oid="9ix0z9y">
                                        Giải pháp tùy chỉnh
                                    </option>
                                </select>
                            </div>

                            <div data-oid="a_oknoh">
                                <label
                                    className="block text-sm font-medium mb-2"
                                    data-oid="iu53pw_"
                                >
                                    Tin nhắn *
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:border-blue-400 focus:outline-none transition-colors backdrop-blur-sm resize-none"
                                    placeholder="Mô tả nhu cầu của bạn..."
                                    data-oid="ei:v5fs"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-blue-500/25"
                                data-oid="y7t7ksi"
                            >
                                Gửi tin nhắn
                            </button>
                        </form>
                    </div>

                    {/* Team Section */}
                    <div className="space-y-8" data-oid="mbebfwa">
                        <div className="text-center" data-oid="n6e8fpz">
                            <h2 className="text-3xl font-bold mb-4" data-oid=":nuemyv">
                                Đội ngũ của chúng tôi
                            </h2>
                            <p className="text-gray-400" data-oid="_9hpw_-">
                                Gặp gỡ những người sẽ hỗ trợ bạn
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4" data-oid="lh9e0wr">
                            {teamMembers.map((member, index) => (
                                <div
                                    key={index}
                                    className="group bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-500 hover:bg-white/10 transform hover:-translate-y-1 shadow-xl text-center"
                                    data-oid="ef20rnk"
                                >
                                    <div
                                        className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300"
                                        data-oid="vudb4cb"
                                    >
                                        {member.avatar}
                                    </div>
                                    <h3
                                        className="font-bold text-lg mb-1 group-hover:text-blue-400 transition-colors"
                                        data-oid=".kf1k9y"
                                    >
                                        {member.name}
                                    </h3>
                                    <p className="text-sm text-gray-400 mb-2" data-oid="ri24t5v">
                                        {member.role}
                                    </p>
                                    <a
                                        href={`mailto:${member.email}`}
                                        className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                                        data-oid="-ryt40s"
                                    >
                                        {member.email}
                                    </a>
                                </div>
                            ))}
                        </div>

                        {/* Office Hours */}
                        <div
                            className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20"
                            data-oid="3mvbr9t"
                        >
                            <h3 className="text-xl font-bold mb-4 text-center" data-oid="p:m8m-y">
                                Giờ làm việc
                            </h3>
                            <div className="space-y-2 text-center" data-oid="jqm8qzz">
                                <div className="flex justify-between" data-oid=":s9wwcm">
                                    <span data-oid="6bi6l2j">Thứ 2 - Thứ 6:</span>
                                    <span className="text-blue-400" data-oid="ys-01e3">
                                        9:00 - 18:00
                                    </span>
                                </div>
                                <div className="flex justify-between" data-oid="ewro4ld">
                                    <span data-oid="x7kebkj">Thứ 7:</span>
                                    <span className="text-blue-400" data-oid="7im6hd9">
                                        9:00 - 12:00
                                    </span>
                                </div>
                                <div className="flex justify-between" data-oid="3hmg8cw">
                                    <span data-oid="ucm-wxm">Chủ nhật:</span>
                                    <span className="text-gray-400" data-oid="730qm:n">
                                        Nghỉ
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <section
                    className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl mb-16"
                    data-oid="eilyvzk"
                >
                    <div className="text-center mb-12" data-oid="bq8yugq">
                        <h2 className="text-4xl font-bold mb-4" data-oid="0iy18so">
                            Câu hỏi thường gặp
                        </h2>
                        <p className="text-xl text-gray-400" data-oid="mgyo6y2">
                            Những thắc mắc phổ biến về dịch vụ hỗ trợ
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8" data-oid="zpsva2h">
                        <div className="space-y-6" data-oid="z1a_2jm">
                            <div data-oid="ndytpa0">
                                <h3
                                    className="text-xl font-bold mb-3 text-blue-400"
                                    data-oid="ctupu8v"
                                >
                                    Thời gian phản hồi là bao lâu?
                                </h3>
                                <p className="text-gray-300" data-oid="j0o8rf_">
                                    Chúng tôi cam kết phản hồi trong vòng 24 giờ cho email và 2 giờ
                                    cho live chat.
                                </p>
                            </div>
                            <div data-oid="z9myous">
                                <h3
                                    className="text-xl font-bold mb-3 text-purple-400"
                                    data-oid="0cnm0oc"
                                >
                                    Có hỗ trợ tiếng Việt không?
                                </h3>
                                <p className="text-gray-300" data-oid="jkvcwyf">
                                    Có, toàn bộ đội ngũ hỗ trợ của chúng tôi đều thành thạo tiếng
                                    Việt.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-6" data-oid="y8lw99r">
                            <div data-oid="yfdisio">
                                <h3
                                    className="text-xl font-bold mb-3 text-pink-400"
                                    data-oid="qot:76r"
                                >
                                    Có hỗ trợ setup ban đầu không?
                                </h3>
                                <p className="text-gray-300" data-oid="sv9huor">
                                    Có, chúng tôi cung cấp hỗ trợ setup miễn phí cho tất cả khách
                                    hàng mới.
                                </p>
                            </div>
                            <div data-oid="z63o1sc">
                                <h3
                                    className="text-xl font-bold mb-3 text-green-400"
                                    data-oid="x98767f"
                                >
                                    Có training cho nhân viên không?
                                </h3>
                                <p className="text-gray-300" data-oid="-eiu3ub">
                                    Có, chúng tôi cung cấp training online và onsite cho gói
                                    Enterprise.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section
                    className="text-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl rounded-3xl p-16 border border-white/20"
                    data-oid="6z.5nqv"
                >
                    <h2 className="text-4xl font-bold mb-6" data-oid="178_vqg">
                        Sẵn sàng bắt đầu?
                    </h2>
                    <p
                        className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
                        data-oid="mxfdjqz"
                    >
                        Đừng chần chừ, hãy liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn
                        phí
                    </p>
                    <div
                        className="flex flex-col sm:flex-row gap-6 justify-center"
                        data-oid="1aw7_4f"
                    >
                        <button
                            className="group px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25"
                            data-oid="4tdstq2"
                        >
                            <span
                                className="flex items-center justify-center gap-2"
                                data-oid="62pwzdh"
                            >
                                🚀 Dùng thử 14 ngày miễn phí
                            </span>
                        </button>
                        <Link
                            href="/pricing"
                            className="px-10 py-4 border-2 border-white/20 rounded-full text-lg font-semibold hover:bg-white/10 transition-all backdrop-blur-sm hover:border-white/40"
                            data-oid="-2t1wen"
                        >
                            💰 Xem bảng giá
                        </Link>
                    </div>
                </section>
            </main>

            {/* Back to Top Button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-110 flex items-center justify-center group ${
                    showBackToTop
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
                aria-label="Back to top"
                data-oid="ud38kmm"
            >
                <svg
                    className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="vw75:on"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                        data-oid="z4il3u."
                    />
                </svg>
            </button>
        </div>
    );
}
