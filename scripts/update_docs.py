import json
import os

# Function estimate read time
def estimate_read_time(text):
    words = len(text.split())
    minutes = max(1, round(words / 200))
    return f"{minutes} min"

# User Data Construction
raw_data = {
    "categories": [
        {
          "id": "website-overview",
          "title": "Website Overview",
          "pages": [
            {
              "id": "website-overview-page",
              "title": "Website Overview",
              "slug": "website-overview",
              "sections": [
                {
                  "id": "overview-intro",
                  "title": "Website Overview Introduction",
                  "content": "The Website Overview section lists all your website’s pages along with key linking metrics. This view helps you assess how well your pages are connected internally and externally, as well as identify new opportunities for internal linking." 
                },
                {
                  "id": "incoming-links",
                  "title": "Incoming Links",
                  "content": "This shows how many internal links across your site point to each page. Pages with more incoming links are better connected, which helps improve crawlability, distribute page authority, boost search visibility, and enhance user navigation." 
                },
                {
                  "id": "outgoing-links",
                  "title": "Outgoing Links",
                  "content": "The Outgoing Links column shows the number of internal links each page contains that point to other pages within your website. These links help distribute authority across your site and improve content discoverability. External links to other domains are tracked separately." 
                },
                {
                  "id": "external-links",
                  "title": "External Links",
                  "content": "The External Links column shows how many links on each page point to external domains outside your website. High-quality external links help signal credibility and relevance when they lead to trusted sources, and can improve your site’s authority in the eyes of search engines." 
                },
                {
                  "id": "opportunities",
                  "title": "Opportunities",
                  "content": "The Opportunities column shows the total number of internal link opportunities Dofollo’s AI has identified for each page based on contextual relevance. These suggestions include incoming and outgoing link ideas, focused on strengthening internal structure and boosting SEO visibility." 
                },
                {
                  "id": "start-link-planning",
                  "title": "Start Link Planning",
                  "content": "The Start Link Planning option opens the Plan Your Page view for the selected page. It shows all AI-suggested internal link opportunities, along with recommended anchor texts and contextual match scores. Use this panel to manage and publish internal links." 
                },
                {
                  "id": "rescan",
                  "title": "Rescan",
                  "content": "The Rescan option lets you manually update a page’s data after making changes, especially to content or internal links. While Dofollo updates pages automatically over time, rescanning ensures your new changes are reflected immediately in link suggestions." 
                },
                {
                  "id": "open-in-new-tab",
                  "title": "Open in a New Tab",
                  "content": "The Open in a New Tab option opens the source page (the page from which a link is being suggested) in a new browser tab. Use this when you need to manually view the content before deciding whether to place the internal link." 
                },
                {
                  "id": "search-filters",
                  "title": "Search and Filters",
                  "content": "The Search bar lets you quickly locate any page by its URL, especially useful for large sites. You can use Orphan and Broken filters to instantly view pages with no internal links or pages with link issues that need fixing." 
                },
                {
                  "id": "list-view",
                  "title": "List View",
                  "content": "The List View displays all your pages in a structured table format with columns for internal links, external links, opportunities, and actions. This default view provides comprehensive data at a glance." 
                },
                {
                  "id": "radial-view",
                  "title": "Radial View",
                  "content": "The Radial View visualizes your website’s internal link structure in a hierarchical graph. It helps you understand how pages are connected at a glance and is useful for spotting isolated pages or weak internal linking. You can Ctrl-Click on any node to open its Page Level View." 
                },
                {
                  "id": "radial-view-settings",
                  "title": "Radial View Settings",
                  "content": "Radial View settings let you customize how the site structure is displayed. You can set Max Node Count to control how many pages are shown per layer in the graph, helping avoid visual clutter on large sites." 
                },
                {
                  "id": "exclude-parameters",
                  "title": "Exclude Parameters",
                  "content": "Exclude Parameters allows you to hide pages based on URL patterns, such as /tags or /search, that aren’t meaningful for internal linking. This keeps the graph focused on pages important to link structure." 
                }
              ]
            }
          ]
        },
        {
          "id": "getting-started",
          "title": "Getting Started",
          "pages": [
            {
              "id": "getting-started-with-dofollo",
              "title": "Getting Started with Dofollo",
              "slug": "getting-started-with-dofollo",
              "sections": [
                {
                  "id": "step-1-sign-up",
                  "title": "Step 1: Sign Up or Sign In",
                  "content": "Click the “Get Started” button at the top-right corner of dofollo.ai. You can continue using your email address, Google, or Facebook. If you’re a new user, this will create your account. If you’re a returning user, it will log you in — no password required. You’ll receive a 6-digit OTP via email for verification."
                },
                {
                  "id": "step-2-verify-email",
                  "title": "Step 2: Verify Your Email",
                  "content": "After signing up, you’ll receive a 6-digit OTP (One-Time Password) in your inbox. Enter this code to complete the verification process. This helps secure your account and activate access to Dofollo’s dashboard."
                },
                {
                  "id": "step-3-add-website",
                  "title": "Step 3: Add Your First Website",
                  "content": "After email verification, if you haven’t added any websites yet, you’ll be automatically redirected to the Add Website page. Enter your website URL and click Submit to begin the scan."
                },
                {
                  "id": "step-4-ai-scan",
                  "title": "Step 4: AI-Powered Scanning Begins",
                  "content": "Dofollo’s AI will now scan all pages of your website to discover existing internal and external links, identify contextual internal link suggestions, detect orphaned pages and broken links, and evaluate how well your pages are interconnected."
                },
                {
                  "id": "step-5-dashboard",
                  "title": "Step 5: View Your Dashboard",
                  "content": "Once scanning is complete, your dashboard gives you a complete overview of your website’s internal linking performance. You’ll see total number of pages, internal links, and external links, AI-powered link opportunities, broken links and orphan pages (if any), and trending pages with high linking potential. Pro Tip: Connect Google Search Console to unlock advanced AI suggestions based on real traffic data."
                },
                {
                  "id": "manage-ai-link-opportunities",
                  "title": "Viewing and Managing AI Link Opportunities",
                  "content": "After scanning, you’ll see the “Total Opportunity Found” box showing the total internal link suggestions identified across all website pages. These suggestions are contextually generated to help strengthen internal linking without manual effort."
                },
                {
                  "id": "step-6-view-opportunities",
                  "title": "Step 6: View Opportunities by Page",
                  "content": "Go to the Website Overview section to see internal link opportunities for each page. You’ll see columns for URL, Incoming Links, Outgoing Links, External Links, and Opportunities. Next to each page, quick-access tools allow you to start link planning, rescan, or open the live page in a new tab. You can also open a Page-Level View for detailed link insights."
                },
                {
                  "id": "step-7-open-planning-panel",
                  "title": "Step 7: Open the Planning Panel",
                  "content": "Click the opportunity number next to any page in the Website Overview to open its Planning view. Here you’ll find incoming and outgoing link suggestions, suggested anchor text, contextual match score (%), and tabs for existing and planned links. Use the Create Link button to export or publish links."
                },
                {
                  "id": "step-8-wordpress-integration",
                  "title": "Step 8: WordPress Integration (One-Time Setup)",
                  "content": "When you click “Create Link” for the first time on a WordPress site, you’ll be prompted to complete the WordPress integration by entering your WordPress admin credentials securely. Once integrated, your site will be connected to Dofollo permanently."
                },
                {
                  "id": "step-9-publishing-links",
                  "title": "Step 9: Publishing a Link (WordPress Only)",
                  "content": "After integration, clicking “Create Link” opens the source page and shows the recommended anchor text. Review or edit the anchor text as needed, then click Publish to instantly insert the internal link into your content."
                }
              ]
            }
          ]
        },
        {
          "id": "dashboard",
          "title": "Dashboard",
          "pages": [
            {
              "id": "dashboard-overview",
              "title": "Dashboard",
              "slug": "dashboard",
              "sections": [
                {
                  "id": "total-pages",
                  "title": "Total Pages",
                  "content": "This shows how many unique, crawlable pages Dofollo has scanned from your website. It includes only pages that are publicly accessible, return valid status codes, and aren’t blocked by robots.txt, redirects, or login walls. More pages means more internal link opportunities and better SEO potential."
                },
                {
                  "id": "total-internal-links",
                  "title": "Total Internal Links",
                  "content": "This metric displays the total number of internal links — links from one page on your domain to another. Internal links are key for improving site crawlability, SEO structure, and user navigation."
                },
                {
                  "id": "total-external-links",
                  "title": "Total External Links",
                  "content": "This shows the total number of outgoing links from your website to other domains. External links can boost credibility when they point to trusted, relevant sites, and help with user reference and authority building."
                },
                {
                  "id": "total-opportunity-found",
                  "title": "Total Opportunity Found",
                  "content": "This shows the total number of internal link opportunities identified by Dofollo’s AI across all pages of your website. Each opportunity is a chance to strengthen your internal link structure and boost SEO."
                },
                {
                  "id": "trending-pages",
                  "title": "Trending Pages",
                  "content": "This section highlights the top-performing pages on your site based on organic traffic and engagement, pulled directly from Google Search Console if connected. Use this to prioritize link building on pages that are already gaining traction."
                },
                {
                  "id": "internal-vs-external-link-trends",
                  "title": "Internal vs External Link Trends",
                  "content": "This view displays the overall proportion of internal links versus external links. It also helps you track how your linking strategy evolves over time as your site grows, using visual charts and trend graphs."
                },
                {
                  "id": "recent-activity",
                  "title": "Recent Activity",
                  "content": "The Recent Activity section logs your latest actions in Dofollo such as link insertions, deletions, rescans, and site updates. This helps you monitor changes, workflow activity, and stay updated on what’s happening across your site."
                }
              ]
            }
          ]
        },
      {
       "id": "pagelevel-view",
          "title": "Page Level View",
          "pages": [
            {
              "id": "pagelevel-view-page",
              "title": "Page Level View",
              "slug": "pagelevel-view",
              "sections": [
                {
                  "id": "overview",
                  "title": "Page Level View Overview",
                  "content": "The Page Level View gives you a detailed visual breakdown of all the internal and external links connected to a specific page. It helps you understand how much link authority the page receives, where it passes authority, and what additional internal linking opportunities exist." 
                },
                {
                  "id": "incoming-links",
                  "title": "Incoming Links",
                  "content": "The Incoming Links section shows how many internal links from other pages on your website point to the current page. This includes a count of total inbound links and a visual map of source pages. Incoming links help distribute authority, improve crawlability, and assist search engines in discovering important content." 
                },
                {
                  "id": "outgoing-links",
                  "title": "Outgoing Links",
                  "content": "The Outgoing Links section shows how many links from the current page point to other pages within your website as well as external domains. It includes a count of total outbound links and a visual breakdown of internal and external links. Proper outgoing links improve content discoverability and user experience." 
                },
                {
                  "id": "external-links",
                  "title": "External Links",
                  "content": "The External Links section shows how many links from the current page point to domains outside your website. External links can support your content by referencing trusted sources and improve credibility when used appropriately." 
                },
                {
                  "id": "lite-version-toggle",
                  "title": "Lite Version Toggle",
                  "content": "The Lite Version toggle switches to a simplified view of the graph with fewer visual elements and faster loading. This is useful for pages with large numbers of links or slower connections, giving you quicker access without the full graphic complexity." 
                },
                {
                  "id": "hide-navigation-links-toggle",
                  "title": "Hide Navigation Links Toggle",
                  "content": "The Hide Navigation Links toggle filters out structural links such as headers, footers, and menu navigation that aren’t SEO-relevant. It is enabled by default to focus on meaningful contextual links, but you can turn it off if you want to see all link types." 
                },
                {
                  "id": "list-view",
                  "title": "List View",
                  "content": "The List View option displays all links on the selected page — including incoming, outgoing, and external — in a clean, scrollable table format. This view is helpful for quickly reviewing link details like destination URLs, link types, and anchor texts when the graph view becomes visually complex." 
                },
                {
                  "id": "ai-suggestions",
                  "title": "AI Suggestions",
                  "content": "The AI Suggestions panel shows internal linking opportunities that Dofollo’s AI detects based on the content and context of the page. These suggestions include potential internal links with contextual relevance scores and help uncover linking opportunities you might otherwise miss." 
                },
                {
                  "id": "plan-with-ai",
                  "title": "Plan With AI",
                  "content": "The Plan With AI button allows you to take action on the internal linking suggestions shown in AI Suggestions. When you click it, you’ll see a list of internal link opportunities with recommended source content blocks and match scores. You can then publish these links (WordPress only), save them as drafts, or export them for manual use." 
                }
              ]
            }
          ]
        },
    
       {
          "id": "planning-page",
          "title": "Planning Page",
          "pages": [
            {
              "id": "planning-page-doc",
              "title": "Planning Page",
              "slug": "planning-page",
              "sections": [
                {
                  "id": "overview",
                  "title": "Planning Page Overview",
                  "content": "The Planning Page helps you manage and organize internal link opportunities for a selected page. It is divided into multiple tabs that show AI suggestions, planned links, and existing links, along with controls to create, publish, delete, or save link suggestions." 
                },
                {
                  "id": "ai-suggestions",
                  "title": "AI Suggestions",
                  "content": "This tab displays AI-generated internal linking opportunities for the selected page. There are sub-tabs for Incoming and Outgoing suggestions that help you identify where links can be added contextually to improve SEO." 
                },
                {
                  "id": "your-plan",
                  "title": "Your Plan",
                  "content": "The Your Plan tab shows all the links you’ve saved as planned but not yet published. It helps queue up link recommendations for later review, bulk export, or eventual publishing." 
                },
                {
                  "id": "existing-pages",
                  "title": "Existing Pages",
                  "content": "The Existing Pages tab lists all current internal links related to the selected page. It includes two sub-tabs for Incoming and Outgoing links that show what is already in place before adding new ones." 
                },
                {
                  "id": "create-link-button",
                  "title": "Create Link Button",
                  "content": "The Create Link button lets you act on a suggested internal link. For WordPress sites, clicking opens the donor page where you can select anchor text and publish the link. For non-WordPress sites, it saves the suggestion as a draft for later manual implementation." 
                },
                {
                  "id": "deletion-mode",
                  "title": "Deletion Mode",
                  "content": "The Deletion Mode toggle allows you to remove existing internal links from the selected page. Once enabled, you can delete both incoming and outgoing links directly in the Existing Pages tab to clean up outdated or irrelevant connections." 
                },
                {
                  "id": "publishing-links",
                  "title": "Publishing Links",
                  "content": "After selecting the appropriate anchor text in the Create Link flow (WordPress only), click the Publish Link button to insert the internal link directly on your live website. This final step completes the internal link placement process when your site is integrated with WordPress." 
                },
                {
                  "id": "save-for-later",
                  "title": "Save for Later",
                  "content": "The Save for Later option lets you store link suggestions without immediate publishing. On WordPress sites, it saves them as drafts in the Your Plan tab. On non-WordPress sites, it queues them for export so you can manually implement them later." 
                },
                {
                  "id": "planning-header",
                  "title": "Planning Page Header",
                  "content": "The Planning Page header shows key fields like Suggested URL, Recommended Section, and Match Percentage. Suggested URL is where the link will originate or point to, Recommended Section indicates the content area for placement, and Match % shows how contextually relevant the suggestion is." 
                }
              ]
            }
          ]
        },
        {
          "id": "planned-links",
          "title": "Planned Links",
          "pages": [
            {
              "id": "planned-links-page",
              "title": "Planned Links",
              "slug": "planned-links",
              "sections": [
                {
                  "id": "overview",
                  "title": "Planned Links Overview",
                  "content": "The Planned Links section within the Dofollo dashboard shows all the internal links you have saved as drafts for future placement. It helps you track and manage links that have been planned but not yet published or exported."
                },
                {
                  "id": "tabs-all-recent-stale",
                  "title": "Tabs: All, Recent, and Stale",
                  "content": "There are three tabs in the Planned Links view: All, Recent, and Stale. The All tab displays all saved link plans. Recent shows pages with newly updated link plans. Stale lists link plans that haven’t been updated in a while and may need review or action." 
                },
                {
                  "id": "search-by-url",
                  "title": "Search by URL",
                  "content": "Use the Search by URL feature to quickly locate a specific page within your planned links list by typing in the page’s URL. This is useful for large sites with many planned link entries."
                },
                {
                  "id": "page-list",
                  "title": "Page List",
                  "content": "The Page List section displays each page for which you have saved planned links. It shows the page URL, the date the link suggestion was last modified, and action buttons to manage that plan. Clicking a page URL opens its planning panel for deeper review."
                },
                {
                  "id": "deleting-draft-links",
                  "title": "Deleting Draft Links",
                  "content": "You can delete any planned (draft) internal link that hasn’t been published yet. Using the Delete icon next to the saved link removes the unpublished suggestion from your planned queue without affecting live pages on your website."
                },
                {
                  "id": "plan-new-page",
                  "title": "Plan New Page",
                  "content": "The Plan New Page option opens a pop-up where you can enter the URL of a target page you want to plan links for. Submitting the URL takes you to the Page Level View so you can explore and save new internal link opportunities for that page."
                }
              ]
            }
          ]
        },
       {
          "id": "scan-new-page",
          "title": "Scan New Page",
          "pages": [
            {
              "id": "scan-new-page-doc",
              "title": "Scan New Page",
              "slug": "scan-new-page",
              "sections": [
                {
                  "id": "overview",
                  "title": "Scan New Page Overview",
                  "content": "The Scan New Page feature allows you to manually trigger the scanning of a newly published or updated page so that it gets included in Dofollo’s analysis immediately rather than waiting for automatic detection."
                },
                {
                  "id": "how-it-works",
                  "title": "How It Works",
                  "content": "When you use this feature, a pop-up appears where you can enter the URL of the page you want to scan. Once submitted, Dofollo will immediately begin scanning the page to detect internal link opportunities."
                },
                {
                  "id": "automatic-detection",
                  "title": "Automatic Detection",
                  "content": "Dofollo automatically detects and scans new pages over time during its regular site analysis. However, if you want a specific page to be included right away, using Scan New Page ensures the page is analyzed without waiting."
                }
              ]
            }
          ]
        },
        {
          "id": "settings-configuration",
          "title": "Settings & Configuration",
          "pages": [
            {
              "id": "settings-configuration-page",
              "title": "Settings & Configuration",
              "slug": "settings-configuration",
              "sections": [
                {
                  "id": "overview",
                  "title": "Overview",
                  "content": "Customize how the Dofollo dashboard appears and behaves based on your preferences. In this section, you can manage your profile details and personalize your dashboard experience for improved navigation and workflow." 
                },
                {
                  "id": "profile",
                  "title": "Profile",
                  "content": "The Profile section lets you view and manage your personal account details. You can access it by clicking your user icon in the top-right corner of the dashboard and selecting Profile from the dropdown. Here you can update your name, email address, location (if set), subscription plan, and account status." 
                },
                {
                  "id": "settings",
                  "title": "Settings",
                  "content": "In the Settings area, you can find options to personalize how the Dofollo dashboard looks and works. These options help improve usability and make it easier to navigate the interface, especially on large websites." 
                },
                {
                  "id": "dark-light-mode",
                  "title": "Dark & Light Mode",
                  "content": "Use the Dark & Light Mode toggle to switch between light and dark themes. This lets you optimize visibility and reduce eye strain based on your environment and preference." 
                },
                {
                  "id": "direction",
                  "title": "Direction",
                  "content": "The Direction setting allows you to choose whether the sidebar menu appears on the left or the right side of your screen. This helps align the dashboard layout with your preferred workflow and reading pattern." 
                },
                {
                  "id": "layout-options",
                  "title": "Layout Options",
                  "content": "Choose between a compact or spacious layout for the dashboard interface. The compact view tightens spacing for more information at a glance, while the spacious view increases padding for better readability." 
                },
                {
                  "id": "stretch-view",
                  "title": "Stretch View",
                  "content": "The Stretch View setting lets you adjust the workspace spacing so that panels and visuals appear more spread out. This is useful when viewing link visualizations or working with detailed graphs for better clarity." 
                },
                {
                  "id": "fullscreen-mode",
                  "title": "Fullscreen Mode",
                  "content": "Enable Fullscreen Mode to expand the interface for a distraction-free experience. This hides browser chrome and maximizes the workspace, ideal when you are reviewing link recommendations or analyzing site structure." 
                }
              ]
            }
          ]
        }
    ],

    "integration": [
      {
          "id": "connect-wordpress",
          "title": "Connect WordPress",
          "pages": [
            {
              "id": "connect-wordpress-page",
              "title": "Connect WordPress",
              "slug": "connect-wordpress",
              "sections": [
                {
                  "id": "overview",
                  "title": "Connect WordPress Overview",
                  "content": "The Connect WordPress feature links your WordPress site with Dofollo so that you can publish internal links directly from the Dofollo dashboard. This connection is required only once and remains active for future link publishing actions." 
                },
                {
                  "id": "when-it-appears",
                  "title": "When the Connect Popup Appears",
                  "content": "The Connect Your Website pop-up appears when you try to publish an internal link from Dofollo but haven’t yet completed the WordPress integration. You can follow the steps in the pop-up to connect your site and enable direct publishing." 
                },
                {
                  "id": "benefits",
                  "title": "Benefits of Connecting WordPress",
                  "content": "Connecting WordPress with Dofollo provides several benefits: it links your WordPress backend with the Dofollo dashboard, enables direct publishing of internal links, and eliminates the need to manually open your WordPress admin to add links. Once connected, you can apply AI-recommended links instantly, saving time and making the link building workflow easier—especially for larger sites." 
                },
                {
                  "id": "without-connecting",
                  "title": "Using Dofollo Without WordPress Integration",
                  "content": "Even if you don’t integrate WordPress, you can still view internal link suggestions within Dofollo. However, direct publishing of those links to your live site won’t be possible until WordPress is connected." 
                }
              ]
            }
          ]
        },
        {
          "id": "connect-gsc",
          "title": "Connect Google Search Console",
          "pages": [
            {
              "id": "connect-gsc-page",
              "title": "Connect GSC",
              "slug": "connect-gsc",
              "sections": [
                {
                  "id": "overview",
                  "title": "Connect GSC Overview",
                  "content": "The Connect GSC feature lets you link your Google Search Console account with Dofollo to unlock real organic search data within the Dofollo dashboard. By connecting GSC, Dofollo can use actual search performance metrics to enhance internal link suggestions and SEO insights."
                },
                {
                  "id": "why-connect-gsc",
                  "title": "Why Connect Google Search Console?",
                  "content": "Connecting GSC to Dofollo helps the AI leverage real traffic and performance data from Google Search Console. This allows Dofollo to identify pages with genuine organic engagement and tailor internal link suggestions based on pages that are already performing well in search results." 
                },
                {
                  "id": "benefits",
                  "title": "Benefits of GSC Integration",
                  "content": "When you link Google Search Console with Dofollo, you gain access to actual search metrics such as clicks, impressions, and positions. This improves the relevance and impact of internal link recommendations, especially for pages that are already gaining traction, helping you distribute link equity more strategically." 
                },
                {
                  "id": "how-to-connect",
                  "title": "How to Connect GSC",
                  "content": "To connect Google Search Console, navigate to the Integrations section in your Dofollo dashboard and select \"Connect GSC\". You will be prompted to sign in to your Google account and grant Dofollo permission to access your Search Console property data. Once authenticated, your Search Console account will be linked and data will begin synchronizing." 
                },
                {
                  "id": "used-in-ai-suggestions",
                  "title": "Used in AI Suggestions",
                  "content": "Once GSC is connected, Dofollo can include real GSC traffic and performance signals when generating AI internal link suggestions. This helps identify underlinked pages with high potential and prioritizes links that improve search visibility based on real traffic patterns." 
                }
              ]
            }
          ]
        },
        {
          "id": "why-you-need-rabbitloader",
          "title": "Why You Need RabbitLoader",
          "pages": [
            {
              "id": "why-you-need-rabbitloader-page",
              "title": "Why You Need RabbitLoader",
              "slug": "why-you-need-rabbitloader",
              "sections": [
                {
                  "id": "overview",
                  "title": "Overview",
                  "content": "Dofollo focuses on internal link structure and SEO strategy, but page speed and technical performance directly impact how well your content ranks. RabbitLoader improves site performance metrics that search engines and users care about, such as Core Web Vitals and page load speed." 
                },
                {
                  "id": "core-web-vitals",
                  "title": "Core Web Vitals Improvements",
                  "content": "RabbitLoader helps improve Core Web Vitals metrics, including metrics related to loading performance and visual stability. Better Core Web Vitals can contribute to improved search ranking and a smoother user experience." 
                },
                {
                  "id": "pagespeed-insights-score",
                  "title": "Pagespeed Insights Score",
                  "content": "Using RabbitLoader can boost your Pagespeed Insights score on both mobile and desktop. Higher performance scores often correlate with better SEO performance and increased visibility in search results." 
                },
                {
                  "id": "load-time-and-rendering",
                  "title": "Load Time and Rendering Speed",
                  "content": "RabbitLoader optimizes how quickly pages load and render for visitors. Faster page load times reduce bounce rates, increase engagement, and improve the likelihood that users stay on your site." 
                },
                {
                  "id": "user-experience",
                  "title": "Improved User Experience",
                  "content": "Improved performance through RabbitLoader enhances the user experience, especially on mobile devices. Users are more likely to engage with content and navigate through pages when performance is fast and seamless." 
                },
                {
                  "id": "combined-benefits",
                  "title": "Combined Benefits with Dofollo",
                  "content": "By using both Dofollo for internal link strategy and RabbitLoader for speed optimization together, you improve both content strategy and technical performance, giving your site a stronger chance to rank higher in search results and retain visitors." 
                }
              ]
            }
          ]
        }
    ],

    "About-dofollo": [
        {
          "id": "what-is-dofollo",
          "title": "What is Dofollo?",
          "pages": [
            {
              "id": "what-is-dofollo-page",
              "title": "What is Dofollo?",
              "slug": "what-is-dofollo",
              "sections": [
                {
                  "id": "overview",
                  "title": "Overview",
                  "content": "Dofollo is an AI-powered internal link management tool designed to help website owners discover, optimize, and manage internal links across their websites. It uses advanced AI algorithms to identify contextually relevant link opportunities that might otherwise remain hidden deep within your content." 
                },
                {
                  "id": "key-features",
                  "title": "Key Features and Capabilities",
                  "content": "Dofollo analyzes your site’s internal link structure to find opportunities for linking and strengthening your SEO. On supported platforms like WordPress and WooCommerce, it even lets you place or remove internal links directly from the Dofollo dashboard. The tool helps improve crawlability, link authority distribution, and organic search visibility by optimizing internal links with AI precision." 
                },
                {
                  "id": "ai-benefits",
                  "title": "Benefits of AI-Powered Linking",
                  "content": "By leveraging AI, Dofollo can uncover contextual internal link opportunities that manual methods or basic plugins often miss. The AI considers relevance between content pages and suggests high-impact links. This helps enhance content discoverability, retain users longer, and improve SEO performance." 
                },
                {
                  "id": "platform-support",
                  "title": "Platform Support",
                  "content": "Dofollo works across all websites regardless of the platform, but it offers deeper integration with platforms like WordPress and WooCommerce. When integrated with WordPress, users can publish, update, or delete internal links directly from the dashboard without switching to the website’s backend." 
                },
                {
                  "id": "who-its-for",
                  "title": "Who It’s For",
                  "content": "Dofollo is useful for website owners, SEO professionals, and digital marketers who want to improve organic rankings with a strong internal linking strategy. It’s especially helpful for large websites, agency workflows, or sites with complex content structures where manual internal linking would be time-consuming." 
                }
              ]
            }
          ]
        },
       {
          "id": "why-use-dofollo",
          "title": "Why Use Dofollo?",
          "pages": [
            {
              "id": "why-use-dofollo-page",
              "title": "Why Use Dofollo?",
              "slug": "why-use-dofollo",
              "sections": [
                {
                  "id": "overview",
                  "title": "Overview",
                  "content": "Dofollo is an AI-powered internal linking tool built to help you grow traffic and improve rankings — no matter what platform your website runs on. It combines powerful AI suggestions with a central dashboard to make internal link management smarter and faster." 
                },
                {
                  "id": "ai-driven-discovery",
                  "title": "AI-Driven Internal Link Discovery",
                  "content": "Dofollo’s AI scans your entire website to uncover contextual internal link opportunities hidden across your content. These suggestions work across all platforms, and on WordPress/WooCommerce you can place or delete links directly from the Dofollo dashboard." 
                },
                {
                  "id": "smart-ai-suggestions",
                  "title": "Smart AI-Powered Suggestions",
                  "content": "Link suggestions are ranked based on contextual relevance. Dofollo integrates with Google Search Console to identify pages with real organic traffic and tailor internal link distribution to improve SEO impact." 
                },
                {
                  "id": "detect-orphan-broken",
                  "title": "Detect Orphan Pages & Broken Links",
                  "content": "Dofollo highlights orphan pages — pages not linked anywhere on your site — as well as broken links. These issues can hurt SEO, and Dofollo helps identify and resolve them efficiently." 
                },
                {
                  "id": "competitor-analysis",
                  "title": "Analyze Competitor Link Strategies",
                  "content": "Get insights into how top-ranking websites structure their internal links. Dofollo’s AI analyzes competitor strategies to help you adapt and improve your own internal linking approach." 
                },
                {
                  "id": "improve-seo",
                  "title": "Improve Search Rankings with Better Link Structures",
                  "content": "Internal links help search engines discover and prioritize content. Dofollo ensures your site’s link structure supports stronger rankings and better crawlability by maximizing meaningful internal linking opportunities." 
                },
                {
                  "id": "save-time",
                  "title": "Save Hours Managing Large or Multiple Sites",
                  "content": "Dofollo eliminates the need to manually open each page to manage links. Especially useful for large websites or agencies, it centralizes link management to save time at scale." 
                }
              ]
            }
          ]
        }
    ],

    "team-member": [
        {
          "id": "adding-team-members",
          "title": "Adding Team Members",
          "pages": [
            {
              "id": "adding-team-members-page",
              "title": "Adding Team Members",
              "slug": "adding-team-members",
              "sections": [
                {
                  "id": "overview",
                  "title": "Overview",
                  "content": "The Team Members section displays all team members currently involved in your project. From here, you can invite new members and manage team access."
                },
                {
                  "id": "step-1-invite-member",
                  "title": "Step 1: Invite Member",
                  "content": "To add a new member to your project, click on the “Invite Member” button located in the top-right corner of the screen. This starts the process to invite a collaborator to your Dofollo project." 
                },
                {
                  "id": "step-2-enter-details",
                  "title": "Step 2: Enter Email and Role",
                  "content": "After clicking “Invite Member”, you will be prompted to fill in the email address of the person you want to invite, along with the role they should have — either “member” or “manager”."
                },
                {
                  "id": "step-3-select-role",
                  "title": "Step 3: Select Role",
                  "content": "In this step, choose the appropriate role for the invited user. The role determines the level of access they have within your project."
                },
                {
                  "id": "step-4-send-invite",
                  "title": "Step 4: Send Invitation",
                  "content": "After entering the email and selecting the role, send the invitation. The invited team member will receive an email which they must accept to gain access to your project."
                }
              ]
            }
          ]
        },
        {
          "id": "deleting-team-members",
          "title": "Deleting Team Members",
          "pages": [
            {
              "id": "deleting-team-members-page",
              "title": "Deleting Team Members",
              "slug": "deleting-team-members",
              "sections": [
                {
                  "id": "overview",
                  "title": "Overview",
                  "content": "To delete or remove any team member from your project, go to your Team Members section in the Dofollo dashboard. Here you can see all current members associated with your project, along with options to manage access."
                },
                {
                  "id": "step-remove-member",
                  "title": "Removing a Team Member",
                  "content": "Find the team member you want to remove in the Team Members list and click the \"Delete\" button next to their name. This will immediately remove their access from your project in Dofollo."
                },
                {
                  "id": "confirmation",
                  "title": "Confirmation",
                  "content": "After clicking the \"Delete\" button, the team member will be removed from the list and will no longer have access to your Dofollo project. There is no effect on other team members or settings unless explicitly changed."
                }
              ]
            }
          ]
        }
    ],

    "help": [
        {
          "id": "create-ticket",
          "title": "Create Ticket",
          "pages": [
            {
              "id": "create-ticket-page",
              "title": "Create Ticket",
              "slug": "create-ticket",
              "sections": [
                {
                  "id": "overview",
                  "title": "Overview",
                  "content": "If you need help or run into any issues while using Dofollo, you can create a support ticket to get assistance from the Dofollo support team. This is the primary way to report problems or ask questions that aren’t answered in the documentation."
                },
                {
                  "id": "how-to-create-ticket",
                  "title": "How to Create a Ticket",
                  "content": "To create a support ticket, visit the Dofollo Support page at https://dofollo.ai/support and fill out the support form with your query or problem. Provide clear details about your issue so the support team can understand and assist you efficiently."
                },
                {
                  "id": "response-time",
                  "title": "Response Time",
                  "content": "After submitting your ticket, the Dofollo support team will review it and respond to you via email. Support replies are typically sent within 24 hours on working days."
                }
              ]
            }
          ]
        }
    ],

    "how-to's": [
        {
          "id": "troubleshooting-login-issues",
          "title": "Troubleshooting Login Issues",
          "pages": [
            {
              "id": "troubleshooting-login-issues-page",
              "title": "Troubleshooting Login Issues",
              "slug": "troubleshooting-login-issues",
              "sections": [
                {
                  "id": "overview",
                  "title": "Overview",
                  "content": "If you’re having trouble logging into your Dofollo account, this guide helps you resolve common login issues quickly and easily."
                },
                {
                  "id": "forgot-password",
                  "title": "Forgot Password",
                  "content": "If you forgot your password, use the “Recover Password” option on the login page to reset it. When you request a password reset, Dofollo will send a verification code to your registered email address to help you reset your old password and regain access to your account." 
                },
                {
                  "id": "email-verification",
                  "title": "Email Verification Issues",
                  "content": "If you are not receiving the verification code via email, check your spam or junk folder first. Ensure that you entered the correct email address associated with your Dofollo account. If the code still doesn’t arrive, try resending it or contact support for further assistance." 
                },
                {
                  "id": "incorrect-credentials",
                  "title": "Incorrect Credentials",
                  "content": "Make sure you are using the right login method (email, Google, or Facebook) and that the credentials match the ones you used to sign up. If you recently changed your email, use that updated email address to request a new login verification code." 
                },
                {
                  "id": "contact-support",
                  "title": "Contact Support",
                  "content": "If none of the above steps resolve your login issue, you can create a support ticket for help. Visit the Dofollo Support page at https://dofollo.ai/support and describe the issue clearly so the support team can assist you promptly." 
            }
          ]
        }
      ]
    },
    {
      "id": "find-your-website",
      "title": "Find Your Website",
      "pages": [
        {
          "id": "find-your-website-page",
          "title": "Find Your Website",
          "slug": "find-your-website",
          "sections": [
            {
              "id": "overview",
              "title": "Overview",
              "content": "After logging in successfully, you will be redirected to your Dofollo dashboard. From the dashboard, you can view the list of all websites (projects) associated with your account. This allows you to quickly find and switch between your websites."
            },
            {
              "id": "using-dashboard",
              "title": "Using the Dashboard to Find Your Website",
              "content": "Once you’re on the dashboard, your websites are listed in a table or selection list. You can scroll through this list to locate a specific project or use the interface tools to navigate easily among multiple websites."
            },
            {
              "id": "add-new-website",
              "title": "Add New Website Option",
              "content": "If you don’t see the website you’re looking for, you can use the “Add New Website” option from the top dropdown. This lets you add another project by entering its URL and starting a new scan immediately."
            }
          ]
        }
      ]
    },
    {
      "id": "add-new-website-to-dofollo",
      "title": "Add a New Website to Dofollo",
      "pages": [
        {
          "id": "add-new-website-to-dofollo-page",
          "title": "Add a New Website to Dofollo",
          "slug": "add-a-new-website-to-dofollo",
          "sections": [
            {
              "id": "overview",
              "title": "Overview",
              "content": "To begin using Dofollo, you need to add at least one website to your dashboard so that Dofollo can scan and analyze its internal and external links."
            },
            {
              "id": "after-signup",
              "title": "After Signup",
              "content": "After signing up and completing the login process, enter your website’s URL in the provided input box and click the “Submit” button to start scanning your website immediately." 
            },
            {
              "id": "adding-additional-websites",
              "title": "Adding Additional Websites",
              "content": "If you already have an account and existing projects, you can add another website by clicking the “Add” button from your dashboard. This lets you manage multiple websites under the same Dofollo account." 
            },
            {
              "id": "toggle-projects",
              "title": "Toggle Between Projects",
              "content": "Once you’ve added multiple websites, you can switch between your different projects easily from the dashboard by using the project selector or toggle interface." 
            }
          ]
        }
      ]
    },
    {
      "id": "select-anchor-text",
      "title": "Select Anchor Text",
      "pages": [
        {
          "id": "select-anchor-text-page",
          "title": "Select Anchor Text",
          "slug": "select-anchor-text",
          "sections": [
            {
              "id": "overview",
              "title": "Overview",
              "content": "The Select Anchor Text function helps you choose the specific anchor text you want to use for your internal link on the selected page. Choosing relevant anchor text manually ensures maximum SEO benefit and improves the clarity and effectiveness of your link placement." 
            },
            {
              "id": "why-it-matters",
              "title": "Why Selecting Anchor Text Matters",
              "content": "Anchor text is the visible, clickable text in a hyperlink that tells users and search engines what the linked page is about. Good anchor text improves navigation, provides context, and can positively influence search engine understanding of the content relationship when used strategically." 
            },
            {
              "id": "best-practices",
              "title": "Anchor Text Best Practices",
              "content": "When selecting anchor text, choose phrases that clearly describe the linked page’s content, avoid generic text like “click here,” and prefer descriptive terms that match the context of the link. This enhances user experience and helps search engines interpret the page relationship more accurately." 
            },
            {
              "id": "internal-linking-strategy",
              "title": "Role in Internal Linking Strategy",
              "content": "Choosing appropriate anchor text is essential for internal linking strategies because it reinforces page relevance and hierarchy. Strategic anchor text helps distribute link authority across your site and improves overall SEO performance." 
            }
          ]
        }
      ]
    },
    {
      "id": "publish-link",
      "title": "Publish Link",
      "pages": [
        {
          "id": "publish-link-page",
          "title": "Publish Link",
          "slug": "publish-link",
          "sections": [
            {
              "id": "overview",
              "title": "Overview",
              "content": "The Publish Link feature acts as the final confirmation step to add your internal link — whether incoming or outgoing — to the selected page. Once you are satisfied with the anchor text and placement, clicking Publish inserts the link into the page’s content." 
            },
            {
              "id": "when-to-use",
              "title": "When to Use Publish Link",
              "content": "Use the Publish Link option after reviewing the AI-suggested internal link, ensuring the anchor text is appropriate and contextually relevant to both the source and destination pages. This ensures the link adds SEO value and improves navigability." 
            },
            {
              "id": "requirements",
              "title": "Requirements",
              "content": "To successfully publish an internal link directly from Dofollo, your website must be integrated with WordPress. Without WordPress integration, you won’t be able to insert the link automatically and will need to export the link details for manual implementation." 
            },
            {
              "id": "what-happens-on-publish",
              "title": "What Happens on Publish",
              "content": "When you click Publish, Dofollo pushes the link into your live content on WordPress, adding the selected anchor text and updating the page structure. This saves time compared to manually editing each page in your CMS." 
            },
            {
              "id": "manual-alternative",
              "title": "Manual Alternative (Non-WordPress Sites)",
              "content": "If your site is not connected to WordPress, you can still use Dofollo’s link suggestions by exporting them in CSV or other formats. Then manually add the internal links within your CMS using the recommended anchor text and source/destination details." 
            }
          ]
        }
      ]
    }
  ]
}

final_categories = []

# Order of processing:
# 1. categories (The main pages)
# 2. About-dofollo
# 3. integration
# 4. team-member
# 5. how-to's
# 6. help
# 7. settings-configuration (not array, single item in raw_data['categories'] actually)

# But wait, looking at raw_data['categories'], it contains mixed things in the user input.
# The user's input `categories` list contains:
# - Website Overview
# - Getting Started
# - Dashboard
# - Page Level View
# - Planning Page
# - Planned Links
# - Scan New Page
# - Settings & Configuration
# AND a key `integration` in the root structure (not inside categories).

# Helper to process a list of categories
def process_categories(category_list):
    processed = []
    for cat in category_list:
        new_cat = {
            "id": cat.get("id"),
            "title": cat.get("title"),
            "items": []
        }
        
        # In user input, 'pages' exists instead of 'items'
        if "pages" in cat:
            for page in cat["pages"]:
                # Construct markdown content
                content_parts = []
                for section in page.get("sections", []):
                    title = section.get("title", "")
                    body = section.get("content", "")
                    content_parts.append(f"## {title}\n\n{body}")
                
                full_content = "\n\n".join(content_parts)
                
                # Derive summary
                summary = ""
                if page.get("sections") and len(page["sections"]) > 0:
                     summary = page["sections"][0].get("content", "")[:150] + "..."
                
                item = {
                    "id": page.get("slug"), # Use slug as ID
                    "title": page.get("title"),
                    "summary": summary,
                    "lastUpdated": "2024-03-20",
                    "readTime": estimate_read_time(full_content),
                    "tags": ["Guide", new_cat["title"]],
                    "content": full_content
                }
                new_cat["items"].append(item)
        
        processed.append(new_cat)
    return processed

# Add "categories"
if "categories" in raw_data:
    final_categories.extend(process_categories(raw_data["categories"]))

# Add "integration"
if "integration" in raw_data:
    final_categories.extend(process_categories(raw_data["integration"]))

# Add "About-dofollo"
if "About-dofollo" in raw_data:
    final_categories.extend(process_categories(raw_data["About-dofollo"]))

# Add "team-member"
if "team-member" in raw_data:
    final_categories.extend(process_categories(raw_data["team-member"]))
    
# Add "how-to's"
if "how-to's" in raw_data:
    final_categories.extend(process_categories(raw_data["how-to's"]))

# Add "help"
if "help" in raw_data:
    final_categories.extend(process_categories(raw_data["help"]))


final_json = {
    "categories": final_categories
}

# Write to file
output_path = r"d:\Joy\Dofollo_test\src\data\docs.json"
with open(output_path, "w", encoding='utf-8') as f:
    json.dump(final_json, f, indent=4)

print(f"Successfully updated {output_path}")
