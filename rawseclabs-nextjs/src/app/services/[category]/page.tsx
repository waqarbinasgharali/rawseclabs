import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { 
  ShieldAlert, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  ExternalLink,
  Lock,
  Layers
} from 'lucide-react';
import { CATEGORIES, getCategoryBySlug } from '@/data/services';

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) return {};

  return {
    title: `${category.name} Services`,
    description: category.desc,
    alternates: {
      canonical: `https://www.rawseclabs.com/services/${categorySlug}`,
    },
    openGraph: {
      title: `${category.name} | RawSecLabs`,
      description: category.desc,
      url: `https://www.rawseclabs.com/services/${categorySlug}`,
    }
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 bg-[#060911] min-h-screen relative">
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] radial-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-8">
          <Link href="/" className="hover:text-cyan-400">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/services" className="hover:text-cyan-400">Services</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-cyan-400 font-bold">{category.name}</span>
        </nav>

        {/* Hero Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            CORE PRACTICE DOMAIN &bull; {category.services.length} ENGAGEMENTS
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            {category.name}
          </h1>
          <p className="text-xl font-medium text-cyan-300">
            {category.tagline}
          </p>
          <p className="text-base text-slate-300 leading-relaxed">
            {category.desc}
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-cyan-400" />
            Available Assessments in {category.name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.services.map((service) => (
              <div
                key={service.slug}
                className="flex flex-col justify-between p-6 rounded-2xl bg-[#090e1b] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 shadow-xl group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-xs text-slate-400 mt-2.5 line-clamp-3 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <Link
                    href={`/services/${category.slug}/${service.slug}`}
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group/btn"
                  >
                    <span>View Methodology</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </Link>

                  <Link
                    href="/contact"
                    className="text-[11px] font-medium text-slate-400 hover:text-white"
                  >
                    Request Scope &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-cyan-950/30 via-[#0a0f1d] to-slate-900 border border-cyan-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white">Need a customized {category.name} scope?</h3>
            <p className="text-xs text-slate-400 max-w-xl">
              Our principal consultants will assess your architecture, compliance drivers, and asset complexity to formulate a non-destructive, high-value testing plan.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-xs shadow-lg shadow-cyan-500/20 whitespace-nowrap"
          >
            Consult with a Lead Assessor
          </Link>
        </div>

      </div>
    </div>
  );
}
