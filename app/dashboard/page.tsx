'use client';

import { useState } from 'react';

export default function Dashboard() {
    const [selectedPlatform, setSelectedPlatform] = useState('all');

    const platforms = [
        {
            id: 'facebook',
            name: 'Facebook',
            icon: '📘',
            color: 'bg-blue-500',
            users: '2.9B',
            engagement: '85%',
        },
        {
            id: 'instagram',
            name: 'Instagram',
            icon: '📷',
            color: 'bg-pink-500',
            users: '2.0B',
            engagement: '92%',
        },
        {
            id: 'twitter',
            name: 'Twitter',
            icon: '🐦',
            color: 'bg-sky-500',
            users: '450M',
            engagement: '78%',
        },
        {
            id: 'linkedin',
            name: 'LinkedIn',
            icon: '💼',
            color: 'bg-blue-700',
            users: '900M',
            engagement: '88%',
        },
        {
            id: 'tiktok',
            name: 'TikTok',
            icon: '🎵',
            color: 'bg-black',
            users: '1.0B',
            engagement: '95%',
        },
        {
            id: 'youtube',
            name: 'YouTube',
            icon: '📺',
            color: 'bg-red-500',
            users: '2.7B',
            engagement: '82%',
        },
    ];

    const recentActivities = [
        { id: 1, action: 'Đã tích hợp Facebook Page', time: '2 phút trước', status: 'success' },
        {
            id: 2,
            action: 'Phân tích Instagram Stories hoàn thành',
            time: '15 phút trước',
            status: 'success',
        },
        { id: 3, action: 'Cập nhật dữ liệu Twitter', time: '1 giờ trước', status: 'warning' },
        { id: 4, action: 'Báo cáo LinkedIn được tạo', time: '2 giờ trước', status: 'success' },
    ];

    const stats = [
        { title: 'Tổng khách hàng', value: '125,847', change: '+12.5%', trend: 'up' },
        { title: 'Tương tác hôm nay', value: '45,231', change: '+8.2%', trend: 'up' },
        { title: 'Chuyển đổi', value: '3.2%', change: '+0.5%', trend: 'up' },
        { title: 'Doanh thu', value: '₫2.4M', change: '+15.3%', trend: 'up' },
    ];

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white"
            data-oid="n2sbxa1"
        >
            {/* Header */}
            <header
                className="bg-white/5 backdrop-blur-sm border-b border-white/10 px-6 py-4"
                data-oid="-e4osa0"
            >
                <div className="flex justify-between items-center" data-oid="_lq4nkr">
                    <div data-oid="q18jxfx">
                        <h1
                            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                            data-oid="lsuvnvg"
                        >
                            Glutisify Dashboard
                        </h1>
                        <p className="text-gray-400 mt-1" data-oid="0mjw9qz">
                            Chào mừng trở lại! Đây là tổng quan về dữ liệu của bạn.
                        </p>
                    </div>
                    <div className="flex items-center space-x-4" data-oid="mm3:gun">
                        <button
                            className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                            data-oid="bnruaa."
                        >
                            🔔
                        </button>
                        <div
                            className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center"
                            data-oid="_2nb6.b"
                        >
                            👤
                        </div>
                    </div>
                </div>
            </header>

            <div className="p-6" data-oid="h2rl:oq">
                {/* Stats Grid */}
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
                    data-oid="avomw8i"
                >
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                            data-oid="fk79j_l"
                        >
                            <div
                                className="flex justify-between items-start mb-4"
                                data-oid="f4-fu46"
                            >
                                <h3
                                    className="text-gray-300 text-sm font-medium"
                                    data-oid="ykoc0ll"
                                >
                                    {stat.title}
                                </h3>
                                <span
                                    className={`text-xs px-2 py-1 rounded-full ${stat.trend === 'up' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}
                                    data-oid="8zj8lut"
                                >
                                    {stat.change}
                                </span>
                            </div>
                            <div className="text-2xl font-bold text-white" data-oid="6zhl13g">
                                {stat.value}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid lg:grid-cols-3 gap-6" data-oid="taqlexh">
                    {/* Platform Overview */}
                    <div
                        className="lg:col-span-2 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                        data-oid="x0vfxpg"
                    >
                        <div className="flex justify-between items-center mb-6" data-oid=":d::1v1">
                            <h2 className="text-xl font-semibold" data-oid="tjypg6_">
                                Tổng quan nền tảng
                            </h2>
                            <select
                                value={selectedPlatform}
                                onChange={(e) => setSelectedPlatform(e.target.value)}
                                className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white"
                                data-oid="h:aunqp"
                            >
                                <option value="all" data-oid="g:.e8jy">
                                    Tất cả nền tảng
                                </option>
                                {platforms.map((platform) => (
                                    <option
                                        key={platform.id}
                                        value={platform.id}
                                        data-oid="tn7.vjc"
                                    >
                                        {platform.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4" data-oid="pira35u">
                            {platforms.map((platform) => (
                                <div
                                    key={platform.id}
                                    className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors cursor-pointer"
                                    data-oid="vpqhp9:"
                                >
                                    <div
                                        className="flex items-center space-x-3 mb-3"
                                        data-oid="omuh4lv"
                                    >
                                        <div className="text-2xl" data-oid="wrr4nqt">
                                            {platform.icon}
                                        </div>
                                        <div data-oid="pz04of7">
                                            <h3 className="font-medium" data-oid="he0an9d">
                                                {platform.name}
                                            </h3>
                                            <p className="text-xs text-gray-400" data-oid="68ebgr5">
                                                {platform.users} users
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex justify-between items-center"
                                        data-oid="xkl6u:c"
                                    >
                                        <span className="text-sm text-gray-300" data-oid="pqil2b7">
                                            Engagement
                                        </span>
                                        <span
                                            className="text-sm font-semibold text-green-400"
                                            data-oid="4:.2atd"
                                        >
                                            {platform.engagement}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recent Activities */}
                    <div
                        className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                        data-oid="41jjn_w"
                    >
                        <h2 className="text-xl font-semibold mb-6" data-oid="64ld_tu">
                            Hoạt động gần đây
                        </h2>
                        <div className="space-y-4" data-oid="7uqv680">
                            {recentActivities.map((activity) => (
                                <div
                                    key={activity.id}
                                    className="flex items-start space-x-3"
                                    data-oid="0pnfut."
                                >
                                    <div
                                        className={`w-2 h-2 rounded-full mt-2 ${
                                            activity.status === 'success'
                                                ? 'bg-green-400'
                                                : activity.status === 'warning'
                                                  ? 'bg-yellow-400'
                                                  : 'bg-red-400'
                                        }`}
                                        data-oid="pma9lal"
                                    ></div>
                                    <div className="flex-1" data-oid="m4ytgx6">
                                        <p className="text-sm text-white" data-oid="kc9j8n-">
                                            {activity.action}
                                        </p>
                                        <p className="text-xs text-gray-400" data-oid="ye77vbq">
                                            {activity.time}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button
                            className="w-full mt-4 py-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                            data-oid="l5tl2n."
                        >
                            Xem tất cả hoạt động
                        </button>
                    </div>
                </div>

                {/* Quick Actions */}
                <div
                    className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                    data-oid="l9j55us"
                >
                    <h2 className="text-xl font-semibold mb-6" data-oid="qt266q1">
                        Thao tác nhanh
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4" data-oid="psu-weq">
                        <button
                            className="bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg p-4 text-center transition-colors"
                            data-oid="xrif_hy"
                        >
                            <div className="text-2xl mb-2" data-oid="tjm5v9b">
                                📊
                            </div>
                            <div className="text-sm font-medium" data-oid="86xs.fz">
                                Tạo báo cáo
                            </div>
                        </button>
                        <button
                            className="bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 rounded-lg p-4 text-center transition-colors"
                            data-oid="_4pfqax"
                        >
                            <div className="text-2xl mb-2" data-oid="7dyy0p7">
                                🔗
                            </div>
                            <div className="text-sm font-medium" data-oid="n3f_ish">
                                Thêm nền tảng
                            </div>
                        </button>
                        <button
                            className="bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 rounded-lg p-4 text-center transition-colors"
                            data-oid="pu_r4dl"
                        >
                            <div className="text-2xl mb-2" data-oid="4gb7q:2">
                                ⚙️
                            </div>
                            <div className="text-sm font-medium" data-oid="-0y-op-">
                                Cài đặt
                            </div>
                        </button>
                        <button
                            className="bg-orange-500/20 hover:bg-orange-500/30 border border-orange-500/30 rounded-lg p-4 text-center transition-colors"
                            data-oid="y4q5web"
                        >
                            <div className="text-2xl mb-2" data-oid="-bni9xf">
                                💬
                            </div>
                            <div className="text-sm font-medium" data-oid=":gz-ucg">
                                Hỗ trợ
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
