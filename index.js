const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static frontend assets
app.use(express.static(path.join(__dirname, 'public')));

// Email Transporter (configured via environment variables)
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
    }
});

// API: Send Order Confirmation Email
app.post('/send-email', (req, res) => {
    const { customerEmail, orderDetails, totalPrice } = req.body;

    if (!customerEmail) {
        return res.status(400).json({ success: false, message: '收件者 Email 為必填欄位' });
    }

    const mailOptions = {
        from: process.env.EMAIL_USERNAME || 'no-reply@mochistore.com',
        to: customerEmail,
        subject: '訂單確認 - Mochi Store',
        text: `您好，感謝您在 Mochi Store 的購買！\n\n訂單詳情：\n${orderDetails || '無詳細資料'}\n\n總金額：NT$${totalPrice || 0}\n\n我們會盡快處理您的訂單。`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('[Error] Email 發送失敗:', error);
            return res.status(500).json({ success: false, message: 'Email 發送失敗', error: error.message });
        }
        console.log('[Success] Email sent:', info.response);
        return res.status(200).json({ success: true, message: 'Email 發送成功' });
    });
});

// Root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start Server
app.listen(PORT, () => {
    console.log(`[Mochi Store] 伺服器已啟動，監聽 http://localhost:${PORT}`);
});
