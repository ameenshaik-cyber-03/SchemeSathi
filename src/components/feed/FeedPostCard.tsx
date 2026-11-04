import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark, ExternalLink, CheckCircle2, MoreHorizontal, ShieldCheck, Share2 } from 'lucide-react';
import { FeedPost } from '../../types';
import { useApp } from '../../context/AppContext';

interface FeedPostCardProps {
  post: FeedPost;
}

export const FeedPostCard: React.FC<FeedPostCardProps> = ({ post }) => {
  const { toggleSaveItem, isItemSaved, toggleLikePost, likedPostIds, t } = useApp();
  const [showShareToast, setShowShareToast] = useState(false);
  const isSaved = isItemSaved(post.id);
  const isLiked = likedPostIds.includes(post.id) || post.isLiked;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: `${post.title} - Official Details on SchemeSathi`,
        url: post.officialUrl,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${post.title}: ${post.officialUrl}`);
      setShowShareToast(true);
      setTimeout(() => setShowShareToast(false), 2000);
    }
  };

  return (
    <article className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 mb-4">
      {/* Post Header */}
      <div className="p-3.5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-brand-100 dark:bg-brand-900/40 text-brand-700 dark:text-brand-300 flex items-center justify-center font-bold text-sm border border-brand-200 dark:border-brand-700">
            <ShieldCheck className="w-5 h-5 text-brand-700 dark:text-brand-400" />
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="font-semibold text-xs text-slate-900 dark:text-white leading-tight">
                {post.publisher}
              </span>
              {post.verifiedBadge && (
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 fill-blue-500 text-white shrink-0" />
              )}
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-slate-500 dark:text-slate-400">
              <span>{post.publishedTime}</span>
              <span>•</span>
              <span className="text-brand-700 dark:text-brand-400 font-medium">Verified Source</span>
            </div>
          </div>
        </div>

        <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 rounded-full">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

      {/* Visual Banner Card (Authentic Gov Style) */}
      <div className="relative mx-3 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 via-sky-950 to-blue-900 text-white p-4 shadow-inner border border-blue-900/50">
        {/* Subtle decorative background watermarks */}
        <div className="absolute right-0 top-0 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute right-2 top-2 opacity-15">
          <svg className="w-20 h-20 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm0 18c-3.7 0-6.7-3-6.7-6.7V6.3l6.7-2.5 6.7 2.5v7c0 3.7-3 6.7-6.7 6.7z"/>
          </svg>
        </div>

        {/* Banner Content */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/10 backdrop-blur-sm text-[10px] text-blue-200 font-medium mb-1.5">
            <span>Government of India</span>
          </div>

          <h3 className="text-lg font-black tracking-tight text-white leading-tight">
            {post.headline}
          </h3>

          <div className="flex items-center gap-2 mt-2">
            <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-bold shadow-sm inline-block">
              Apply Now!
            </span>
            {post.highlights.vacancies && (
              <div className="px-2.5 py-0.5 rounded-lg bg-blue-600/60 border border-blue-400/30 text-white text-[11px] font-bold">
                {post.highlights.vacancies}
              </div>
            )}
          </div>

          {/* Highlight metrics pills */}
          <div className="grid grid-cols-2 gap-1.5 mt-3 pt-3 border-t border-white/15 text-[11px]">
            {post.highlights.qualification && (
              <div className="flex items-center gap-1.5 bg-black/20 backdrop-blur-sm px-2 py-1 rounded-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="truncate">{post.highlights.qualification}</span>
              </div>
            )}
            {post.highlights.salaryOrBenefit && (
              <div className="flex items-center gap-1.5 bg-black/20 backdrop-blur-sm px-2 py-1 rounded-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="truncate">{post.highlights.salaryOrBenefit}</span>
              </div>
            )}
            {post.highlights.location && (
              <div className="flex items-center gap-1.5 bg-black/20 backdrop-blur-sm px-2 py-1 rounded-lg col-span-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                <span className="truncate">{post.highlights.location}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Social Engagement Row */}
      <div className="px-3.5 pt-3 pb-1.5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => toggleLikePost(post.id)}
            className="flex items-center gap-1 text-slate-700 dark:text-slate-300 hover:text-red-500 transition group"
          >
            <Heart
              className={`w-5 h-5 transition-transform group-hover:scale-110 ${
                isLiked ? 'fill-red-500 text-red-500' : ''
              }`}
            />
            <span className="text-xs font-semibold">{post.likesCount.toLocaleString()}</span>
          </button>

          <button className="flex items-center gap-1 text-slate-700 dark:text-slate-300 hover:text-blue-500 transition">
            <MessageCircle className="w-5 h-5" />
            <span className="text-xs font-semibold">{post.commentsCount}</span>
          </button>

          <button
            onClick={handleShare}
            className="text-slate-700 dark:text-slate-300 hover:text-emerald-500 transition"
            title="Share via WhatsApp"
          >
            <Share2 className="w-5 h-5" />
          </button>
        </div>

        <button
          onClick={() => toggleSaveItem(post.id)}
          className={`p-1 rounded-full transition ${
            isSaved
              ? 'text-brand-700 dark:text-brand-400'
              : 'text-slate-600 dark:text-slate-400 hover:text-brand-700'
          }`}
          title={isSaved ? 'Remove from Saved' : 'Save to Bookmarks'}
        >
          <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-brand-700 dark:fill-brand-400' : ''}`} />
        </button>
      </div>

      {showShareToast && (
        <div className="mx-3.5 my-1 text-[11px] text-emerald-700 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-1 rounded-md text-center">
          Official link copied to clipboard!
        </div>
      )}

      {/* Caption & Hashtags */}
      <div className="px-3.5 pb-2 text-xs text-slate-800 dark:text-slate-200 leading-relaxed">
        <p>{post.caption}</p>
        <div className="flex flex-wrap gap-1 mt-1.5 text-blue-600 dark:text-blue-400 font-medium text-[11px]">
          {post.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Verified Official Notification & Apply Card */}
      <div className="p-3 pt-1">
        <a
          href={post.officialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group block p-3 rounded-2xl bg-brand-50 hover:bg-brand-100 dark:bg-slate-800/80 dark:hover:bg-slate-800 border border-brand-200 dark:border-brand-900/60 transition-all duration-150"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-xl bg-brand-700 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                <ExternalLink className="w-4 h-4" />
              </div>
              <div className="truncate">
                <p className="font-bold text-xs text-brand-900 dark:text-brand-300 leading-tight">
                  {t.viewOfficialNotification}
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                  https://{post.officialDomain}
                </p>
              </div>
            </div>
            <div className="w-7 h-7 rounded-full bg-white dark:bg-slate-700 flex items-center justify-center text-brand-700 dark:text-brand-300 shadow-sm shrink-0 ml-2">
              <span className="text-xs font-bold">→</span>
            </div>
          </div>
        </a>
      </div>
    </article>
  );
};
