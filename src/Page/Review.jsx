import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ReviewPage() {
    const [rating, setRating] = useState(0);
    const [hoveredRating, setHoveredRating] = useState(0);
    const [showReviewBox, setShowReviewBox] = useState(false);
    const [reviewText, setReviewText] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const EMAILJS_SERVICE_ID = 'service_404lxe7';
    const EMAILJS_TEMPLATE_ID = 'template_7mf57pn';
    const EMAILJS_PUBLIC_KEY = 'tmUgtXKf_TwGrV1iE';

    const handleStarClick = (starRating) => {
        setRating(starRating);
        setError('');
        setSubmitted(false);

        if (starRating <= 3) {
            setShowReviewBox(true);
        } else {
            setShowReviewBox(false);
            window.open(
                'https://www.google.com/search?rlz=1C1CHBD_enLK1099LK1099&sca_esv=0d39acdbfaa95ae9&cs=1&sxsrf=AE3TifObueP3wSW1i1jfZ0y79yRA7UqEOw:1767014227454&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E3d-GP9G2ynJvZecJPoaPO8ZAnR75gKuWwmeKzOIoOLUyvzGkNmERF-mjYJLB9cStwHXzGPcE4Iuty82kHOIy72JxCV4&q=Earwego+Reviews&sa=X&ved=2ahUKEwiOtdz68OKRAxVtV0EAHY7kJHgQ0bkNegQIHRAD&cshid=1767014467515629&biw=1449&bih=746&dpr=2#lrd=0x4879f17175ebd3cd:0x4cc5abbc5eefd982,3,,,,',
                '_blank',
                'noopener,noreferrer'
            );
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const templateParams = {
            customer_name: name,
            customer_email: email,
            customer_phone: phone || 'Not provided',
            rating,
            review_text: reviewText,
            star_rating: '⭐'.repeat(rating),
        };

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams,
                EMAILJS_PUBLIC_KEY
            );
            setSubmitted(true);
            setLoading(false);
        } catch {
            setError('Failed to send review. Please try again.');
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#EAF5F1] flex items-center justify-center p-4 sm:p-6 md:p-8">
            <div className="w-full mt-20 max-w-2xl">

                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

                    {/* HEADER */}
                    <div className="bg-[#3FAE8A] px-6 sm:px-8 md:px-12 py-8">
                        <div className="text-center">
                            <div className="inline-block mb-4">
                                <div className="bg-white rounded-full p-4">
                                    <svg className="w-10 h-10 sm:w-12 sm:h-12 text-[#3FAE8A]" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                            </div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
                                Rate Your Experience
                            </h1>
                            <p className="text-white/90">
                                Your feedback helps us serve you better
                            </p>
                        </div>
                    </div>

                    {/* CONTENT */}
                    <div className="px-6 sm:px-8 md:px-12 py-8 sm:py-10 md:py-12">

                        {/* STARS */}
                        <div className="mb-8">
                            <p className="text-center text-[#6B7280] mb-6 font-medium">
                                How would you rate our service?
                            </p>

                            <div className="flex justify-center gap-3">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        onClick={() => handleStarClick(star)}
                                        onMouseEnter={() => setHoveredRating(star)}
                                        onMouseLeave={() => setHoveredRating(0)}
                                    >
                                        <svg
                                            className={`w-12 h-12 ${
                                                star <= (hoveredRating || rating)
                                                    ? 'text-[#3FAE8A]'
                                                    : 'text-[#D1E7DF]'
                                            }`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* ERROR */}
                        {error && (
                            <div className="mb-6 bg-red-50 border border-red-300 rounded-xl p-4 text-center text-red-700">
                                {error}
                            </div>
                        )}

                        {/* REVIEW FORM */}
                        {showReviewBox && !submitted && (
                            <div className="bg-[#F3F7F6] rounded-2xl p-6 border border-[#D1E7DF]">
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <input className="w-full p-3 border rounded-xl" placeholder="Your Name" required value={name} onChange={e => setName(e.target.value)} />
                                    <input className="w-full p-3 border rounded-xl" placeholder="Your Email" required value={email} onChange={e => setEmail(e.target.value)} />
                                    <input className="w-full p-3 border rounded-xl" placeholder="Phone (optional)" value={phone} onChange={e => setPhone(e.target.value)} />
                                    <textarea className="w-full p-3 border rounded-xl" rows="4" placeholder="Your feedback" required value={reviewText} onChange={e => setReviewText(e.target.value)} />

                                    <button
                                        disabled={loading}
                                        className="w-full bg-[#3FAE8A] hover:bg-[#2E8B6B] text-white font-bold py-4 rounded-xl"
                                    >
                                        {loading ? 'Sending...' : 'Submit Review'}
                                    </button>
                                </form>
                            </div>
                        )}

                        {/* SUCCESS */}
                        {submitted && (
                            <div className="bg-green-50 border border-green-300 rounded-2xl p-6 text-center">
                                <h3 className="text-2xl font-bold text-green-700">Thank You!</h3>
                                <p className="text-green-600">Your feedback has been sent.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
