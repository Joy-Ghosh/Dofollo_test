import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronRight, Search, Book, Settings, Code, Zap, X, Layout, LayoutDashboard, FileText, ClipboardList, Link, ScanSearch, Plug, Gauge, HelpCircle, Star, UserPlus, UserMinus, MessageSquare, Unlock, PlusCircle, MousePointerClick, Upload } from 'lucide-react';
import docsData from '../../data/docs.json';

interface DocsSidebarProps {
    isOpen?: boolean;
    onClose?: () => void;
}

const DocsSidebar: React.FC<DocsSidebarProps> = ({ isOpen, onClose }) => {
    // Groups are collapsible, initialized to all open
    const [openGroups, setOpenGroups] = useState<string[]>([
        "Introduction", "Getting Started", "Core Features", "Link Management",
        "Integrations", "Configuration", "Team Management", "Support"
    ]);
    const [searchQuery, setSearchQuery] = useState("");

    const toggleGroup = (group: string) => {
        setOpenGroups(prev =>
            prev.includes(group) ? prev.filter(g => g !== group) : [...prev, group]
        );
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);
        if (query) {
            // Auto-open all groups when searching
            setOpenGroups(groups);
        }
    };

    const getCategoryIcon = (id: string) => {
        switch (id) {
            case 'getting-started': return <Zap className="w-4 h-4" />;
            case 'website-overview': return <Layout className="w-4 h-4" />;
            case 'dashboard': return <LayoutDashboard className="w-4 h-4" />;
            case 'pagelevel-view': return <FileText className="w-4 h-4" />;
            case 'planning-page': return <ClipboardList className="w-4 h-4" />;
            case 'planned-links': return <Link className="w-4 h-4" />;
            case 'scan-new-page': return <ScanSearch className="w-4 h-4" />;
            case 'settings-configuration': return <Settings className="w-4 h-4" />;
            case 'connect-wordpress': return <Plug className="w-4 h-4" />;
            case 'connect-gsc': return <Search className="w-4 h-4" />;
            case 'why-you-need-rabbitloader': return <Gauge className="w-4 h-4" />;
            case 'what-is-dofollo': return <HelpCircle className="w-4 h-4" />;
            case 'why-use-dofollo': return <Star className="w-4 h-4" />;
            case 'adding-team-members': return <UserPlus className="w-4 h-4" />;
            case 'deleting-team-members': return <UserMinus className="w-4 h-4" />;
            case 'create-ticket': return <MessageSquare className="w-4 h-4" />;
            case 'troubleshooting-login-issues': return <Unlock className="w-4 h-4" />;
            case 'find-your-website': return <Search className="w-4 h-4" />;
            case 'add-a-new-website-to-dofollo': return <PlusCircle className="w-4 h-4" />;
            case 'select-anchor-text': return <MousePointerClick className="w-4 h-4" />;
            case 'publish-link': return <Upload className="w-4 h-4" />;
            default: return <Book className="w-4 h-4" />;
        }
    };

    // Mobile classes vs Desktop classes
    const sidebarClasses = isOpen
        ? "fixed inset-y-0 left-0 z-50 w-64 bg-[#0A2E22] border-r border-white/10 shadow-2xl transform transition-transform duration-300 ease-in-out translate-x-0"
        : "w-64 lg:w-72 hidden md:block border-r border-[#0A2E22]/10 h-[calc(100vh-6rem)] sticky top-24 overflow-y-auto bg-[#0A2E22] text-white [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#E1F28F]/20 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-[#E1F28F]";

    const groups = ["Introduction", "Getting Started", "Core Features", "Link Management", "Integrations", "Configuration", "Team Management", "Support"];

    // Filter content based on search query
    const filteredCategories = docsData.categories.map(category => {
        // If search query is empty, return category as is
        if (!searchQuery) return category;

        const lowerQuery = searchQuery.toLowerCase();

        // If category matches, we could return all items.
        if (category.title.toLowerCase().includes(lowerQuery)) {
            return category;
        }

        // Otherwise return category with only matching items
        const matchingItems = category.items.filter((item: any) =>
            item.title.toLowerCase().includes(lowerQuery)
        );

        return {
            ...category,
            items: matchingItems
        };
    }).filter(category => category.items.length > 0);

    return (
        <>
            {/* Mobile Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
                    onClick={onClose}
                />
            )}

            <aside className={sidebarClasses}>
                <div className="p-4 space-y-6">
                    {/* Mobile Close Button */}
                    {isOpen && (
                        <div className="flex justify-end md:hidden mb-2">
                            <button onClick={onClose} className="p-2 text-white/60 hover:text-white rounded-lg hover:bg-white/5">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                    )}

                    {/* Search Bar */}
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-4 w-4 text-white/40 group-hover:text-emerald-400 transition-colors" />
                        </div>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={handleSearch}
                            className="block w-full pl-10 pr-3 py-2 border border-white/10 rounded-lg leading-5 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:bg-white/10 focus:ring-1 focus:ring-emerald-500/50 focus:border-emerald-500/50 sm:text-sm transition-all duration-200"
                            placeholder="Search docs..."
                        />
                    </div>

                    {/* Navigation */}
                    <nav className="space-y-6">
                        {groups.map((groupName) => {
                            const groupCategories = filteredCategories.filter((c: any) => c.group === groupName);
                            if (groupCategories.length === 0) return null;

                            return (
                                <div key={groupName}>
                                    <button
                                        onClick={() => toggleGroup(groupName)}
                                        className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-white/40 uppercase tracking-wider hover:text-white/60 transition-colors group"
                                    >
                                        {groupName}
                                        <ChevronRight
                                            className={`w-3 h-3 transition-transform duration-200 ${openGroups.includes(groupName) ? 'rotate-90' : ''}`}
                                        />
                                    </button>

                                    {openGroups.includes(groupName) && (
                                        <div className="mt-1 space-y-0.5">
                                            {groupCategories.map((category) => (
                                                <div key={category.id}>
                                                    {category.items.map((item: any) => (
                                                        <NavLink
                                                            key={item.id}
                                                            to={`/docs/${item.id}`}
                                                            onClick={onClose}
                                                            className={({ isActive }) =>
                                                                `group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 relative ${isActive
                                                                    ? 'bg-white/10 text-[#E1F28F]'
                                                                    : 'text-white/60 hover:bg-white/5 hover:text-white'
                                                                }`
                                                            }
                                                        >
                                                            {({ isActive }) => (
                                                                <>
                                                                    {isActive && (
                                                                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4 bg-[#E1F28F] rounded-r-full shadow-[0_0_8px_#E1F28F]" />
                                                                    )}
                                                                    <div className="flex items-center gap-2 truncate">
                                                                        <span className={`transition-colors ${isActive ? 'text-[#E1F28F]' : 'text-white/40 group-hover:text-white/60'}`}>
                                                                            {getCategoryIcon(category.id)}
                                                                        </span>
                                                                        <span>{item.title}</span>
                                                                    </div>
                                                                </>
                                                            )}
                                                        </NavLink>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </nav>
                </div>
            </aside>
        </>
    );
};

export default DocsSidebar;
