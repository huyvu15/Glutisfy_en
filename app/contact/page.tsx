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
            data-oid="3h8ejdp"
        >
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden" data-oid="h:ilqm1">
                <div
                    className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"
                    data-oid="jn537:r"
                />

                <div
                    className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"
                    data-oid="py_hpsb"
                />
            </div>

            {/* Navigation */}
            <nav
                className="relative z-50 py-6 px-8 flex justify-between items-center backdrop-blur-xl bg-white/5 border-b border-white/10 shadow-2xl"
                data-oid="d3qhwoc"
            >
                <Link
                    href="/"
                    className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                    data-oid="25lhvj."
                >
                    Glutisify
                </Link>
                <div className="hidden md:flex space-x-8" data-oid="nxfq96e">
                    <Link href="/#features" className="relative group" data-oid="due2qu4">
                        <span
                            className="hover:text-blue-400 transition-all duration-300"
                            data-oid="-jtt3hm"
                        >
                            Tính năng
                        </span>
                        <div
                            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"
                            data-oid="c:hgrvv"
                        />
                    </Link>
                    <Link href="/pricing" className="relative group" data-oid="veyl7xt">
                        <span
                            className="hover:text-blue-400 transition-all duration-300"
                            data-oid="9zqfgg1"
                        >
                            Giá cả
                        </span>
                        <div
                            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"
                            data-oid="mqd0cex"
                        />
                    </Link>
                    <Link href="/contact" className="relative group" data-oid="1k9c2eb">
                        <span
                            className="text-blue-400 transition-all duration-300"
                            data-oid="b_h6x7u"
                        >
                            Liên hệ
                        </span>
                        <div
                            className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"
                            data-oid="72lw:wd"
                        />
                    </Link>
                </div>
                <Link
                    href="/contact"
                    className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold"
                    data-oid="sx7hgmv"
                >
                    Dùng thử miễn phí
                </Link>
            </nav>

            {/* Main Content */}
            <main className="relative z-10 max-w-7xl mx-auto px-8 py-20" data-oid="g299m4n">
                {/* Header */}
                <div
                    className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    data-oid="tt5k59:"
                >
                    <div className="mb-6" data-oid="-1bl30a">
                        <span
                            className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-sm font-medium backdrop-blur-sm"
                            data-oid="54fz7am"
                        >
                            📞 Liên hệ
                        </span>
                    </div>
                    <h1
                        className="text-5xl md:text-7xl font-bold leading-tight mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
                        data-oid="1bfpjfp"
                    >
                        Hãy để chúng tôi{' '}
                        <span
                            className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                            data-oid="879d46-"
                        >
                            hỗ trợ bạn
                        </span>
                    </h1>
                    <p
                        className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
                        data-oid="8qxu.4x"
                    >
                        Đội ngũ chuyên gia của chúng tôi sẵn sàng tư vấn và hỗ trợ bạn tìm ra giải
                        pháp tốt nhất
                    </p>
                </div>

                {/* Contact Info Cards */}
                <div className="grid md:grid-cols-4 gap-6 mb-16" data-oid="-ufyw78">
                    {contactInfo.map((info, index) => (
                        <div
                            key={index}
                            className={`group bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl rounded-3xl p-6 border border-white/20 hover:border-white/40 transition-all duration-500 hover:bg-white/10 transform hover:-translate-y-2 shadow-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                            data-oid="o58t78f"
                        >
                            <div
                                className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                                data-oid="9gajsmq"
                            >
                                {info.icon}
                            </div>
                            <h3
                                className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors"
                                data-oid=".0lmywg"
                            >
                                {info.title}
                            </h3>
                            <p
                                className="text-lg font-medium mb-2 text-blue-300"
                                data-oid="1vekuci"
                            >
                                {info.content}
                            </p>
                            <p className="text-sm text-gray-400" data-oid="yxfifk4">
                                {info.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Contact Form and Team */}
                <div className="grid lg:grid-cols-2 gap-12 mb-16" data-oid="9ltqkv1">
                    {/* Contact Form */}
                    <div
                        className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl rounded-3xl p-8 border border-white/20 shadow-2xl"
                        data-oid="q58kkrv"
                    >
                        <h2 className="text-3xl font-bold mb-6 text-center" data-oid="p.rnglp">
                            Gửi tin nhắn cho chúng tôi
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6" data-oid="w3.tqzu">
                            <div className="grid md:grid-cols-2 gap-4" data-oid=".y_isqk">
                                <div data-oid=".qfeekn">
                                    <label
                                        className="block text-sm font-medium mb-2"
                                        data-oid="axctr3h"
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
                                        data-oid="xodmzc:"
                                    />
                                </div>
                                <div data-oid="wu.nbp7">
                                    <label
                                        className="block text-sm font-medium mb-2"
                                        data-oid="qb89ul:"
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
                                        data-oid="tgy3_9r"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4" data-oid="yndx3fs">
                                <div data-oid="n1g9:4x">
                                    <label
                                        className="block text-sm font-medium mb-2"
                                        data-oid="fbat3nv"
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
                                        data-oid="by-.g7r"
                                    />
                                </div>
                                <div data-oid="u_v0m03">
                                    <label
                                        className="block text-sm font-medium mb-2"
                                        data-oid="sp1uv0m"
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
                                        data-oid=".:_m778"
                                    />
                                </div>
                            </div>

                            <div data-oid="xjlw0z7">
                                <label
                                    className="block text-sm font-medium mb-2"
                                    data-oid="c2fvb:a"
                                >
                                    Gói dịch vụ quan tâm
                                </label>
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:border-blue-400 focus:outline-none transition-colors backdrop-blur-sm"
                                    data-oid="f8b3v.t"
                                >
                                    <option value="starter" data-oid="u2k4afh">
                                        Starter
                                    </option>
                                    <option value="professional" data-oid="ozbzgqm">
                                        Professional
                                    </option>
                                    <option value="enterprise" data-oid="unc2rrc">
                                        Enterprise
                                    </option>
                                    <option value="custom" data-oid="znhgmud">
                                        Giải pháp tùy chỉnh
                                    </option>
                                </select>
                            </div>

                            <div data-oid=".5:ksrs">
                                <label
                                    className="block text-sm font-medium mb-2"
                                    data-oid="vaiy5an"
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
                                    data-oid=".ufogjp"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-blue-500/25"
                                data-oid="7pl2vy3"
                            >
                                Gửi tin nhắn
                            </button>
                        </form>
                    </div>

                    {/* Team Section */}
                    <div className="space-y-8" data-oid="b:9g2yy">
                        <div className="text-center" data-oid="l7u6_9u">
                            <h2 className="text-3xl font-bold mb-4" data-oid="p2s.aq8">
                                Đội ngũ của chúng tôi
                            </h2>
                            <p className="text-gray-400" data-oid="-vrc:ku">
                                Gặp gỡ những người sẽ hỗ trợ bạn
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4" data-oid="hik_.df">
                            {teamMembers.map((member, index) => (
                                <div
                                    key={index}
                                    className="group bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-500 hover:bg-white/10 transform hover:-translate-y-1 shadow-xl text-center"
                                    data-oid="0h86ht3"
                                >
                                    <div
                                        className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300"
                                        data-oid="76k5ktm"
                                    >
                                        {member.avatar}
                                    </div>
                                    <h3
                                        className="font-bold text-lg mb-1 group-hover:text-blue-400 transition-colors"
                                        data-oid="sbcd2.k"
                                    >
                                        {member.name}
                                    </h3>
                                    <p className="text-sm text-gray-400 mb-2" data-oid="da1e6:p">
                                        {member.role}
                                    </p>
                                    <a
                                        href={`mailto:${member.email}`}
                                        className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                                        data-oid="t0bwa.:"
                                    >
                                        {member.email}
                                    </a>
                                </div>
                            ))}
                        </div>

                        {/* Office Hours */}
                        <div
                            className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20"
                            data-oid="znxq7oi"
                        >
                            <h3 className="text-xl font-bold mb-4 text-center" data-oid="k.pwro:">
                                Giờ làm việc
                            </h3>
                            <div className="space-y-2 text-center" data-oid="3p-4d-f">
                                <div className="flex justify-between" data-oid="3mrk2ia">
                                    <span data-oid="21bb-mi">Thứ 2 - Thứ 6:</span>
                                    <span className="text-blue-400" data-oid="auo__b.">
                                        9:00 - 18:00
                                    </span>
                                </div>
                                <div className="flex justify-between" data-oid="8l5606i">
                                    <span data-oid="e.nn223">Thứ 7:</span>
                                    <span className="text-blue-400" data-oid="vk.u17r">
                                        9:00 - 12:00
                                    </span>
                                </div>
                                <div className="flex justify-between" data-oid="9dutg7z">
                                    <span data-oid="_4i2stb">Chủ nhật:</span>
                                    <span className="text-gray-400" data-oid="6k5d.ao">
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
                    data-oid="42mhxoa"
                >
                    <div className="text-center mb-12" data-oid="5u_bd:g">
                        <h2 className="text-4xl font-bold mb-4" data-oid="fa.pr57">
                            Câu hỏi thường gặp
                        </h2>
                        <p className="text-xl text-gray-400" data-oid="ap6z9lz">
                            Những thắc mắc phổ biến về dịch vụ hỗ trợ
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8" data-oid="-axu0--">
                        <div className="space-y-6" data-oid="lzjtjdg">
                            <div data-oid="xrl4i-c">
                                <h3
                                    className="text-xl font-bold mb-3 text-blue-400"
                                    data-oid="j7r1:le"
                                >
                                    Thời gian phản hồi là bao lâu?
                                </h3>
                                <p className="text-gray-300" data-oid="7dwq8st">
                                    Chúng tôi cam kết phản hồi trong vòng 24 giờ cho email và 2 giờ
                                    cho live chat.
                                </p>
                            </div>
                            <div data-oid="ys_4ek0">
                                <h3
                                    className="text-xl font-bold mb-3 text-purple-400"
                                    data-oid="k2smz.s"
                                >
                                    Có hỗ trợ tiếng Việt không?
                                </h3>
                                <p className="text-gray-300" data-oid="y:66nkz">
                                    Có, toàn bộ đội ngũ hỗ trợ của chúng tôi đều thành thạo tiếng
                                    Việt.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-6" data-oid=":xt81pv">
                            <div data-oid="pt_3.1x">
                                <h3
                                    className="text-xl font-bold mb-3 text-pink-400"
                                    data-oid="z8m:m5_"
                                >
                                    Có hỗ trợ setup ban đầu không?
                                </h3>
                                <p className="text-gray-300" data-oid="u80jqn_">
                                    Có, chúng tôi cung cấp hỗ trợ setup miễn phí cho tất cả khách
                                    hàng mới.
                                </p>
                            </div>
                            <div data-oid="t8y74gr">
                                <h3
                                    className="text-xl font-bold mb-3 text-green-400"
                                    data-oid="tv9guv."
                                >
                                    Có training cho nhân viên không?
                                </h3>
                                <p className="text-gray-300" data-oid="f:rd.-r">
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
                    data-oid="0_aoauo"
                >
                    <h2 className="text-4xl font-bold mb-6" data-oid="tcdu7n-">
                        Sẵn sàng bắt đầu?
                    </h2>
                    <p
                        className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
                        data-oid="k7x01wc"
                    >
                        Đừng chần chừ, hãy liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn
                        phí
                    </p>
                    <div
                        className="flex flex-col sm:flex-row gap-6 justify-center"
                        data-oid="nbab:co"
                    >
                        <button
                            className="group px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25"
                            data-oid="e._f5ct"
                        >
                            <span
                                className="flex items-center justify-center gap-2"
                                data-oid="g8vuywr"
                            >
                                🚀 Dùng thử 14 ngày miễn phí
                            </span>
                        </button>
                        <Link
                            href="/pricing"
                            className="px-10 py-4 border-2 border-white/20 rounded-full text-lg font-semibold hover:bg-white/10 transition-all backdrop-blur-sm hover:border-white/40"
                            data-oid="za9lo_v"
                        >
                            💰 Xem bảng giá
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    );
}
