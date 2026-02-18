import React from 'react';
import { Scan, Sparkles, Link, ArrowRight } from 'lucide-react';
import homeData from '../../data/pages/home.json';

const iconMap: { [key: string]: React.ElementType } = {
    Scan,
    Sparkles,
    Link
};

export default function WorkflowSection() {
    const { workflow_section } = homeData;
    const { steps, visual } = workflow_section;

    return (
        <section className="py-24 bg-white text-[#0A2E22] overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Column: Content & Timeline */}
                    <div>
                        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A2E22]/5 border border-[#0A2E22]/10 text-[#045C4E] font-bold text-xs uppercase tracking-wider">
                            <span className="w-2 h-2 rounded-full bg-[#045C4E]"></span>
                            {workflow_section.badge}
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0A2E22] mb-6 leading-tight tracking-tight">
                            {workflow_section.heading_first} <br />in <span className="text-[#045C4E]">{workflow_section.heading_highlight}</span>
                        </h2>
                        <p className="text-lg text-[#0A2E22]/70 mb-12 max-w-lg leading-relaxed">
                            {workflow_section.description}
                        </p>

                        <div className="space-y-0 relative">
                            {steps.map((item, i) => {
                                const Icon = iconMap[item.icon] || Scan;
                                return (
                                    <div key={i} className="relative pl-24 pb-16 last:pb-0 group">
                                        {/* Connecting Line */}
                                        {i !== steps.length - 1 && (
                                            <div className="absolute left-[35px] top-16 bottom-0 w-px bg-gradient-to-b from-[#0A2E22]/10 to-transparent border-l border-dashed border-[#0A2E22]/20" />
                                        )}

                                        {/* Icon Box */}
                                        <div className="absolute left-0 top-0 w-[70px] h-[70px] bg-white border border-[#0A2E22]/10 rounded-2xl flex items-center justify-center shadow-[0_5px_15px_-5px_rgba(0,0,0,0.05)] group-hover:scale-105 group-hover:bg-[#0A2E22] group-hover:border-[#0A2E22] transition-all duration-300 z-10">
                                            <Icon className="w-8 h-8 text-[#045C4E] group-hover:text-[#E1F28F] transition-colors duration-300" />
                                            {/* Number Badge */}
                                            <div className="absolute -top-3 -right-3 bg-[#E1F28F] text-[#0A2E22] text-xs font-bold px-2 py-1 rounded-lg border-2 border-white shadow-sm transform group-hover:rotate-12 transition-transform">
                                                {item.number}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div>
                                            <h3 className="text-xl font-bold mb-3 text-[#0A2E22] group-hover:text-[#045C4E] transition-colors">{item.title}</h3>
                                            <p className="text-[#0A2E22]/60 leading-relaxed text-base">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Column: Visual Card */}
                    <div className="relative lg:pl-10">
                        {/* Background Blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[#E1F28F]/10 rounded-full blur-[80px] -z-10 mix-blend-multiply" />

                        {/* Dashboard Mockup Container */}
                        <div className="bg-white rounded-[2rem] shadow-[0_40px_80px_-20px_rgba(10,46,34,0.15)] border border-[#0A2E22]/5 overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">

                            {/* Mock Window Header */}
                            <div className="bg-[#0A2E22] p-4 flex items-center justify-between">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#E1F28F]/20" />
                                    <div className="w-3 h-3 rounded-full bg-[#E1F28F]/40" />
                                    <div className="w-3 h-3 rounded-full bg-[#E1F28F]" />
                                </div>
                                <div className="text-white/60 text-xs font-mono">dofollo_agent_v2.exe</div>
                            </div>

                            {/* Dashboard Content */}
                            <div className="p-6 space-y-6">

                                {/* Step 1: Audit */}
                                <div className="flex gap-4 items-start">
                                    <div className="mt-1 w-10 h-10 rounded-xl bg-[#0A2E22]/5 flex items-center justify-center border border-[#0A2E22]/5 shrink-0">
                                        <Scan className="w-5 h-5 text-[#045C4E]" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-2">
                                            <h4 className="font-bold text-[#0A2E22] text-sm">{visual.step_1_title}</h4>
                                            <span className="text-xs font-bold text-[#045C4E] bg-[#0A2E22]/5 px-2 py-0.5 rounded">{visual.step_1_status}</span>
                                        </div>
                                        <div className="w-full bg-[#0A2E22]/5 rounded-full h-2 mb-2">
                                            <div className="w-full h-full bg-[#045C4E] rounded-full" />
                                        </div>
                                        <p className="text-xs text-[#0A2E22]/50">{visual.step_1_desc}</p>
                                    </div>
                                </div>

                                {/* Connecting Line */}
                                <div className="pl-5 -my-2">
                                    <div className="w-px h-6 bg-[#0A2E22]/10" />
                                </div>

                                {/* Step 2: Suggestions */}
                                <div className="flex gap-4 items-start">
                                    <div className="mt-1 w-10 h-10 rounded-xl bg-[#0A2E22]/5 flex items-center justify-center border border-[#0A2E22]/5 shrink-0">
                                        <Sparkles className="w-5 h-5 text-[#045C4E]" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-2">
                                            <h4 className="font-bold text-[#0A2E22] text-sm">{visual.step_2_title}</h4>
                                            <span className="text-xs font-bold text-white bg-[#0A2E22] px-2 py-0.5 rounded animate-pulse">{visual.step_2_status}</span>
                                        </div>

                                        {/* Mock Item Cards */}
                                        <div className="space-y-2">
                                            <div className="p-3 bg-[#0A2E22]/5 border border-[#0A2E22]/5 rounded-lg flex items-center justify-between">
                                                <div className="text-xs text-[#0A2E22]/70">
                                                    <span className="font-bold text-[#045C4E]">keyword:</span> "{visual.step_2_item_1}"
                                                </div>
                                                <div className="w-4 h-4 rounded-full border border-[#045C4E]/20 flex items-center justify-center">
                                                    <div className="w-2 h-2 bg-[#045C4E] rounded-full" />
                                                </div>
                                            </div>
                                            <div className="p-3 bg-white border border-[#0A2E22]/5 rounded-lg flex items-center justify-between shadow-sm">
                                                <div className="text-xs text-[#0A2E22]/70">
                                                    <span className="font-bold text-[#045C4E]">keyword:</span> "{visual.step_2_item_2}"
                                                </div>
                                                <div className="w-4 h-4 rounded-full border border-[#045C4E]/20" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Connecting Line */}
                                <div className="pl-5 -my-2">
                                    <div className="w-px h-6 bg-[#0A2E22]/10" />
                                </div>

                                {/* Step 3: Action */}
                                <div className="flex gap-4 items-center">
                                    <div className="w-10 h-10 rounded-xl bg-[#045C4E] flex items-center justify-center shadow-lg shadow-[#045C4E]/20 shrink-0">
                                        <Link className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="flex-1 p-4 bg-[#0A2E22] rounded-xl text-white flex justify-between items-center shadow-xl">
                                        <div>
                                            <div className="text-sm font-bold">{visual.step_3_title}</div>
                                            <div className="text-xs text-white/50">{visual.step_3_desc}</div>
                                        </div>
                                        <div className="w-10 h-5 bg-[#E1F28F] rounded-full p-1 flex justify-end">
                                            <div className="w-3 h-3 bg-[#0A2E22] rounded-full shadow-sm" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
