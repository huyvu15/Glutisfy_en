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
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
            {/* Header */}
            <header className="bg-white/5 backdrop-blur-sm border-b border-white/10 px-6 py-4">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Glutisify Dashboard
                        </h1>
                        <p className="text-gray-400 mt-1">
                            Chào mừng trở lại! Đây là tổng quan về dữ liệu của bạn.
                        </p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                            🔔
                        </button>
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                            👤
                        </div>
                    </div>
                </div>
            </header>

            <div className="p-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-gray-300 text-sm font-medium">{stat.title}</h3>
                                <span
                                    className={`text-xs px-2 py-1 rounded-full ${stat.trend === 'up' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}
                                >
                                    {stat.change}
                                </span>
                            </div>
                            <div className="text-2xl font-bold text-white">{stat.value}</div>
                        </div>
                    ))}
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Platform Overview */}
                    <div className="lg:col-span-2 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-semibold">Tổng quan nền tảng</h2>
                            <select
                                value={selectedPlatform}
                                onChange={(e) => setSelectedPlatform(e.target.value)}
                                className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white"
                            >
                                <option value="all">Tất cả nền tảng</option>
                                {platforms.map((platform) => (
                                    <option key={platform.id} value={platform.id}>
                                        {platform.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {platforms.map((platform) => (
                                <div
                                    key={platform.id}
                                    className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors cursor-pointer"
                                >
                                    <div className="flex items-center space-x-3 mb-3">
                                        <div className="text-2xl">{platform.icon}</div>
                                        <div>
                                            <h3 className="font-medium">{platform.name}</h3>
                                            <p className="text-xs text-gray-400">
                                                {platform.users} users
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-300">Engagement</span>
                                        <span className="text-sm font-semibold text-green-400">
                                            {platform.engagement}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recent Activities */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                        <h2 className="text-xl font-semibold mb-6">Hoạt động gần đây</h2>
                        <div className="space-y-4">
                            {recentActivities.map((activity) => (
                                <div key={activity.id} className="flex items-start space-x-3">
                                    <div
                                        className={`w-2 h-2 rounded-full mt-2 ${
                                            activity.status === 'success'
                                                ? 'bg-green-400'
                                                : activity.status === 'warning'
                                                  ? 'bg-yellow-400'
                                                  : 'bg-red-400'
                                        }`}
                                    ></div>
                                    <div className="flex-1">
                                        <p className="text-sm text-white">{activity.action}</p>
                                        <p className="text-xs text-gray-400">{activity.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-4 py-2 text-sm text-blue-400 hover:text-blue-300 transition-colors">
                            Xem tất cả hoạt động
                        </button>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <h2 className="text-xl font-semibold mb-6">Thao tác nhanh</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <button className="bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg p-4 text-center transition-colors">
                            <div className="text-2xl mb-2">📊</div>
                            <div className="text-sm font-medium">Tạo báo cáo</div>
                        </button>
                        <button className="bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 rounded-lg p-4 text-center transition-colors">
                            <div className="text-2xl mb-2">🔗</div>
                            <div className="text-sm font-medium">Thêm nền tảng</div>
                        </button>
                        <button className="bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 rounded-lg p-4 text-center transition-colors">
                            <div className="text-2xl mb-2">⚙️</div>
                            <div className="text-sm font-medium">Cài đặt</div>
                        </button>
                        <button className="bg-orange-500/20 hover:bg-orange-500/30 border border-orange-500/30 rounded-lg p-4 text-center transition-colors">
                            <div className="text-2xl mb-2">💬</div>
                            <div className="text-sm font-medium">Hỗ trợ</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
