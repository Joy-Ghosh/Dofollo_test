/**
 * ============================================================
 * DOFOLLO — SPACING CONSTANTS
 * Base unit: 4px
 * All values are multiples of 4px for perfect rhythm.
 * ============================================================
 *
 * SCALE
 *  sp(1)  =  4px   → micro gaps, icon padding, tiny offsets
 *  sp(2)  =  8px   → tight inline gaps (badge icon/text, list items small)
 *  sp(3)  = 12px   → compact padding (badges, chips, small tags)
 *  sp(4)  = 16px   → base gap (grid gaps small, inline spacing)
 *  sp(5)  = 20px   → form inputs, tight card padding
 *  sp(6)  = 24px   → card content gap, section inner spacing sm
 *  sp(7)  = 28px   → card padding medium
 *  sp(8)  = 32px   → card padding standard, section padding sm
 *  sp(9)  = 36px   → card padding large
 *  sp(10) = 40px   → component gap, hero padding
 *  sp(12) = 48px   → section padding mobile
 *  sp(14) = 56px   → button height standard
 *  sp(16) = 64px   → section padding medium
 *  sp(20) = 80px   → section padding large
 *  sp(24) = 96px   → section padding xl (py-24)
 *  sp(28) = 112px  → hero section padding
 *  sp(32) = 128px  → section padding xxl (py-32)
 *
 * USAGE GUIDE
 * ─────────────────────────────────────────────────────────────
 * BADGE / CHIP padding   → px-3 (12px) py-1 (4px)  or px-4 (16px) py-1.5 (6px)
 * ICON gap               → gap-2 (8px)
 * CARD PADDING small     → p-6 (24px)
 * CARD PADDING standard  → p-8 (32px)
 * CARD PADDING large     → p-10 (40px)
 * GRID GAP small         → gap-4 (16px)
 * GRID GAP standard      → gap-6 (24px)
 * GRID GAP large         → gap-8 (32px)
 * SECTION PADDING sm     → py-16 (64px)
 * SECTION PADDING md     → py-20 (80px)
 * SECTION PADDING lg     → py-24 (96px)
 * SECTION PADDING xl     → py-28 (112px)
 * SECTION PADDING xxl    → py-32 (128px)
 * HEADING mb             → mb-4 (16px) or mb-6 (24px)
 * PARAGRAPH mb           → mb-4 (16px) or mb-6 (24px)
 * SECTION HEADER mb      → mb-12 (48px) or mb-16 (64px)
 * BUTTON height          → h-11 (44px) or h-14 (56px)
 * BUTTON px              → px-6 (24px) or px-8 (32px)
 * ─────────────────────────────────────────────────────────────
 */

export const sp = {
  /** 4px */  1: '4px',
  /** 6px */  1.5: '6px',
  /** 8px */  2: '8px',
  /** 10px */ 2.5: '10px',
  /** 12px */ 3: '12px',
  /** 14px */ 3.5: '14px',
  /** 16px */ 4: '16px',
  /** 20px */ 5: '20px',
  /** 24px */ 6: '24px',
  /** 28px */ 7: '28px',
  /** 32px */ 8: '32px',
  /** 36px */ 9: '36px',
  /** 40px */ 10: '40px',
  /** 44px */ 11: '44px',
  /** 48px */ 12: '48px',
  /** 56px */ 14: '56px',
  /** 64px */ 16: '64px',
  /** 80px */ 20: '80px',
  /** 96px */ 24: '96px',
  /** 112px */28: '112px',
  /** 128px */32: '128px',
} as const;

/**
 * Semantic spacing aliases — use these in components for clarity
 */
export const spacing = {
    // ── Micro ──────────────────────────────────────
    /** 4px — icon inner padding, dot sizes */
    micro: 'sp-1',
    /** 8px — icon-to-label gap, tight inline */
    tight: 'sp-2',
    /** 12px — badge/chip horizontal padding */
    badgePx: 'sp-3',
    /** 4px — badge vertical padding */
    badgePy: 'sp-1',

    // ── Component ──────────────────────────────────
    /** 16px — compact component gap */
    componentSm: 'sp-4',
    /** 24px — standard component gap / small card padding */
    componentMd: 'sp-6',
    /** 32px — large component gap / standard card padding */
    componentLg: 'sp-8',
    /** 40px — xl component gap / large card padding */
    componentXl: 'sp-10',

    // ── Grid gaps ──────────────────────────────────
    /** 16px — tight grid gap */
    gridSm: 'gap-4',
    /** 24px — standard grid gap */
    gridMd: 'gap-6',
    /** 32px — large grid gap */
    gridLg: 'gap-8',

    // ── Section vertical padding ───────────────────
    /** 64px */
    sectionSm: 'py-16',
    /** 80px */
    sectionMd: 'py-20',
    /** 96px — default section */
    sectionLg: 'py-24',
    /** 112px — hero / CTA sections */
    sectionXl: 'py-28',
    /** 128px — final CTA */
    sectionXxl: 'py-32',

    // ── Section header bottom margin ───────────────
    /** 48px — compact header spacing */
    headerSm: 'mb-12',
    /** 64px — standard section header */
    headerLg: 'mb-16',

    // ── Content spacing ────────────────────────────
    /** 16px — tight heading margin */
    headingSm: 'mb-4',
    /** 24px — standard heading margin */
    headingMd: 'mb-6',
    /** 16px — paragraph margin */
    paragraphMd: 'mb-4',

    // ── Buttons ────────────────────────────────────
    /** 44px height — compact button */
    btnHeightSm: 'h-11',
    /** 56px height — standard button */
    btnHeightMd: 'h-14',
    /** 24px — compact button x-padding */
    btnPxSm: 'px-6',
    /** 32px — standard button x-padding */
    btnPxMd: 'px-8',
    /** 40px — large button x-padding */
    btnPxLg: 'px-10',
} as const;
