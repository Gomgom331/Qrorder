import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '../components/ui/Button';

// ─── Section wrapper ─────────────────────────────────────────────
function Section({ title, desc, children }: { title: string; desc?: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-[6px] border border-slate-200 overflow-hidden">
      <div className="px-4 py-3 border-b border-slate-100 bg-slate-50">
        <p className="text-sm font-medium text-slate-800">{title}</p>
        {desc && <p className="text-xs text-slate-400 mt-0.5">{desc}</p>}
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

// ─── Download Helpers ────────────────────────────────────────────
function downloadCSSTokens() {
  const cssContent = `/* ═══════════════════════════════════════════════════════════════
 * QR Order 백오피스 디자인 토큰
 * ══════════════════════════════════════════════════════════════ */

:root {
  /* ─── Shadow Tokens ─────────────────────────────────────── */
  --shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

  /* ─── Transition Tokens ─────────────────────────────────── */
  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-normal: 200ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 300ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-colors: color, background-color, border-color, text-decoration-color, fill, stroke;
  --transition-opacity: opacity;
  --transition-transform: transform;
  --transition-all: all;

  /* ─── Border Radius Tokens ─────────────────────────────── */
  --radius-xs: 3px;
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-full: 9999px;

  /* ─── Color Tokens ──────────────────────────────────────── */
  --color-brand-primary: #FF6B2B;
  --color-brand-hover: #E55A1A;
  --color-brand-light: rgba(255, 107, 43, 0.1);
  
  --color-sidebar-bg: #0F172A;
  
  --color-slate-50: rgb(248, 250, 252);
  --color-slate-100: rgb(241, 245, 249);
  --color-slate-200: rgb(226, 232, 240);
  --color-slate-300: rgb(203, 213, 225);
  --color-slate-400: rgb(148, 163, 184);
  --color-slate-500: rgb(100, 116, 139);
  --color-slate-600: rgb(71, 85, 105);
  --color-slate-700: rgb(51, 65, 85);
  --color-slate-800: rgb(30, 41, 59);

  /* ─── Font Weight Tokens ────────────────────────────────── */
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* ─── Spacing Tokens ────────────────────────────────────── */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 12px;
  --spacing-lg: 16px;
  --spacing-xl: 20px;
  --spacing-2xl: 24px;
  --spacing-3xl: 32px;

  /* ─── Component Height Tokens ───────────────────────────── */
  --height-sm: 30px;
  --height-md: 36px;
  --height-lg: 44px;
}
`;

  const blob = new Blob([cssContent], { type: 'text/css' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'qr-order-tokens.css';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function downloadFigmaTokens() {
  const figmaTokens = {
    "tokens": {
      "shadow": {
        "xs": {
          "$type": "shadow",
          "$value": {
            "color": "rgba(0, 0, 0, 0.05)",
            "type": "dropShadow",
            "x": 0,
            "y": 1,
            "blur": 2,
            "spread": 0
          }
        },
        "sm": {
          "$type": "shadow",
          "$value": [
            {
              "color": "rgba(0, 0, 0, 0.1)",
              "type": "dropShadow",
              "x": 0,
              "y": 1,
              "blur": 3,
              "spread": 0
            },
            {
              "color": "rgba(0, 0, 0, 0.1)",
              "type": "dropShadow",
              "x": 0,
              "y": 1,
              "blur": 2,
              "spread": -1
            }
          ]
        },
        "md": {
          "$type": "shadow",
          "$value": [
            {
              "color": "rgba(0, 0, 0, 0.1)",
              "type": "dropShadow",
              "x": 0,
              "y": 4,
              "blur": 6,
              "spread": -1
            },
            {
              "color": "rgba(0, 0, 0, 0.1)",
              "type": "dropShadow",
              "x": 0,
              "y": 2,
              "blur": 4,
              "spread": -2
            }
          ]
        },
        "lg": {
          "$type": "shadow",
          "$value": [
            {
              "color": "rgba(0, 0, 0, 0.1)",
              "type": "dropShadow",
              "x": 0,
              "y": 10,
              "blur": 15,
              "spread": -3
            },
            {
              "color": "rgba(0, 0, 0, 0.1)",
              "type": "dropShadow",
              "x": 0,
              "y": 4,
              "blur": 6,
              "spread": -4
            }
          ]
        },
        "xl": {
          "$type": "shadow",
          "$value": [
            {
              "color": "rgba(0, 0, 0, 0.1)",
              "type": "dropShadow",
              "x": 0,
              "y": 20,
              "blur": 25,
              "spread": -5
            },
            {
              "color": "rgba(0, 0, 0, 0.1)",
              "type": "dropShadow",
              "x": 0,
              "y": 8,
              "blur": 10,
              "spread": -6
            }
          ]
        },
        "2xl": {
          "$type": "shadow",
          "$value": {
            "color": "rgba(0, 0, 0, 0.25)",
            "type": "dropShadow",
            "x": 0,
            "y": 25,
            "blur": 50,
            "spread": -12
          }
        }
      },
      "transition": {
        "fast": {
          "$type": "duration",
          "$value": "150ms"
        },
        "normal": {
          "$type": "duration",
          "$value": "200ms"
        },
        "slow": {
          "$type": "duration",
          "$value": "300ms"
        },
        "easing": {
          "$type": "cubicBezier",
          "$value": [0.4, 0, 0.2, 1]
        }
      },
      "radius": {
        "xs": {
          "$type": "borderRadius",
          "$value": "3px"
        },
        "sm": {
          "$type": "borderRadius",
          "$value": "4px"
        },
        "md": {
          "$type": "borderRadius",
          "$value": "6px"
        },
        "lg": {
          "$type": "borderRadius",
          "$value": "8px"
        },
        "xl": {
          "$type": "borderRadius",
          "$value": "12px"
        },
        "full": {
          "$type": "borderRadius",
          "$value": "9999px"
        }
      },
      "color": {
        "brand": {
          "primary": {
            "$type": "color",
            "$value": "#FF6B2B"
          },
          "hover": {
            "$type": "color",
            "$value": "#E55A1A"
          },
          "light": {
            "$type": "color",
            "$value": "rgba(255, 107, 43, 0.1)"
          }
        },
        "sidebar": {
          "bg": {
            "$type": "color",
            "$value": "#0F172A"
          }
        },
        "slate": {
          "50": {
            "$type": "color",
            "$value": "#F8FAFC"
          },
          "100": {
            "$type": "color",
            "$value": "#F1F5F9"
          },
          "200": {
            "$type": "color",
            "$value": "#E2E8F0"
          },
          "300": {
            "$type": "color",
            "$value": "#CBD5E1"
          },
          "400": {
            "$type": "color",
            "$value": "#94A3B8"
          },
          "500": {
            "$type": "color",
            "$value": "#64748B"
          },
          "600": {
            "$type": "color",
            "$value": "#475569"
          },
          "700": {
            "$type": "color",
            "$value": "#334155"
          },
          "800": {
            "$type": "color",
            "$value": "#1E293B"
          }
        }
      },
      "fontWeight": {
        "normal": {
          "$type": "fontWeight",
          "$value": "400"
        },
        "medium": {
          "$type": "fontWeight",
          "$value": "500"
        },
        "semibold": {
          "$type": "fontWeight",
          "$value": "600"
        },
        "bold": {
          "$type": "fontWeight",
          "$value": "700"
        }
      },
      "spacing": {
        "xs": {
          "$type": "dimension",
          "$value": "4px"
        },
        "sm": {
          "$type": "dimension",
          "$value": "8px"
        },
        "md": {
          "$type": "dimension",
          "$value": "12px"
        },
        "lg": {
          "$type": "dimension",
          "$value": "16px"
        },
        "xl": {
          "$type": "dimension",
          "$value": "20px"
        },
        "2xl": {
          "$type": "dimension",
          "$value": "24px"
        },
        "3xl": {
          "$type": "dimension",
          "$value": "32px"
        }
      },
      "height": {
        "sm": {
          "$type": "dimension",
          "$value": "30px"
        },
        "md": {
          "$type": "dimension",
          "$value": "36px"
        },
        "lg": {
          "$type": "dimension",
          "$value": "44px"
        }
      }
    },
    "$metadata": {
      "name": "QR Order Design Tokens",
      "description": "QR Order 백오피스 디자인 시스템 토큰",
      "version": "1.0.0",
      "author": "QR Order Team"
    }
  };

  const jsonString = JSON.stringify(figmaTokens, null, 2);
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'qr-order-tokens.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function TokenGuide() {
  return (
    <div className="p-5 lg:p-6 space-y-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-slate-800">디자인 토큰</h2>
          <p className="text-sm text-slate-400 mt-1">QR Order 백오피스에서 사용되는 모든 디자인 토큰 (CSS 변수)</p>
        </div>
        <div className="flex flex-col gap-2 shrink-0">
          <Button
            type="button"
            onClick={downloadCSSTokens}
            size="sm"
            variant="outline"
            className="border-slate-300 text-slate-700 hover:bg-slate-50"
          >
            <Download className="w-3.5 h-3.5 mr-1.5" />
            CSS 다운로드
          </Button>
          <Button
            type="button"
            onClick={downloadFigmaTokens}
            size="sm"
            variant="outline"
            className="border-slate-300 text-slate-700 hover:bg-slate-50"
          >
            <Download className="w-3.5 h-3.5 mr-1.5" />
            Figma JSON
          </Button>
        </div>
      </div>

      {/* 다운로드 안내 */}
      <div className="bg-blue-50 border border-blue-200 rounded-[6px] p-4">
        <div className="flex items-start gap-3">
          <div className="shrink-0 w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold mt-0.5">
            i
          </div>
          <div className="text-sm text-blue-900 space-y-1">
            <p className="font-medium">토큰 다운로드 안내</p>
            <ul className="text-xs text-blue-800 space-y-0.5 list-disc list-inside">
              <li><strong>CSS 다운로드</strong>: CSS 변수 형식으로 저장 (qr-order-tokens.css)</li>
              <li><strong>Figma JSON</strong>: Figma Variables 플러그인에서 import 가능한 JSON 형식 (qr-order-tokens.json)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Shadow Tokens */}
      <Section title="Shadow 토큰" desc="그림자 효과를 위한 box-shadow 값">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <div className="h-24 bg-white rounded-[6px] flex items-center justify-center" style={{ boxShadow: 'var(--shadow-xs)' }}>
                <span className="text-sm text-slate-600">shadow-xs</span>
              </div>
              <p className="text-xs text-slate-400 mt-2 font-mono">--shadow-xs</p>
            </div>
            <div>
              <div className="h-24 bg-white rounded-[6px] flex items-center justify-center" style={{ boxShadow: 'var(--shadow-sm)' }}>
                <span className="text-sm text-slate-600">shadow-sm</span>
              </div>
              <p className="text-xs text-slate-400 mt-2 font-mono">--shadow-sm</p>
            </div>
            <div>
              <div className="h-24 bg-white rounded-[6px] flex items-center justify-center" style={{ boxShadow: 'var(--shadow-md)' }}>
                <span className="text-sm text-slate-600">shadow-md</span>
              </div>
              <p className="text-xs text-slate-400 mt-2 font-mono">--shadow-md</p>
            </div>
            <div>
              <div className="h-24 bg-white rounded-[6px] flex items-center justify-center" style={{ boxShadow: 'var(--shadow-lg)' }}>
                <span className="text-sm text-slate-600">shadow-lg</span>
              </div>
              <p className="text-xs text-slate-400 mt-2 font-mono">--shadow-lg</p>
            </div>
            <div>
              <div className="h-24 bg-white rounded-[6px] flex items-center justify-center" style={{ boxShadow: 'var(--shadow-xl)' }}>
                <span className="text-sm text-slate-600">shadow-xl</span>
              </div>
              <p className="text-xs text-slate-400 mt-2 font-mono">--shadow-xl</p>
            </div>
            <div>
              <div className="h-24 bg-white rounded-[6px] flex items-center justify-center" style={{ boxShadow: 'var(--shadow-2xl)' }}>
                <span className="text-sm text-slate-600">shadow-2xl</span>
              </div>
              <p className="text-xs text-slate-400 mt-2 font-mono">--shadow-2xl</p>
            </div>
          </div>

          <div className="mt-4 border-t border-slate-200 pt-4">
            <p className="text-sm font-medium text-slate-800 mb-2">사용 예시</p>
            <pre className="bg-slate-900 text-slate-100 rounded-[6px] p-4 text-xs overflow-x-auto">
{`/* CSS */
.card {
  box-shadow: var(--shadow-md);
}

/* 인라인 스타일 */
<div style={{ boxShadow: 'var(--shadow-lg)' }}>
  카드 내용
</div>`}
            </pre>
          </div>
        </div>
      </Section>

      {/* Transition Tokens */}
      <Section title="Transition 토큰" desc="애니메이션과 전환 효과를 위한 timing 값">
        <div className="space-y-4">
          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium text-slate-800 mb-2">속도별 Transition</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-slate-50 p-4 rounded-[6px]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-slate-600">--transition-fast</span>
                    <span className="text-xs text-slate-400">150ms</span>
                  </div>
                  <div 
                    className="h-12 bg-[#FF6B2B] rounded-[4px] hover:bg-[#E55A1A] cursor-pointer"
                    style={{ transition: 'background-color var(--transition-fast)' }}
                  />
                  <p className="text-xs text-slate-400 mt-1">Hover 시 빠른 색상 변경</p>
                </div>

                <div className="bg-slate-50 p-4 rounded-[6px]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-slate-600">--transition-normal</span>
                    <span className="text-xs text-slate-400">200ms</span>
                  </div>
                  <div 
                    className="h-12 bg-[#FF6B2B] rounded-[4px] hover:bg-[#E55A1A] cursor-pointer"
                    style={{ transition: 'background-color var(--transition-normal)' }}
                  />
                  <p className="text-xs text-slate-400 mt-1">Hover 시 보통 속도 변경</p>
                </div>

                <div className="bg-slate-50 p-4 rounded-[6px]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-slate-600">--transition-slow</span>
                    <span className="text-xs text-slate-400">300ms</span>
                  </div>
                  <div 
                    className="h-12 bg-[#FF6B2B] rounded-[4px] hover:bg-[#E55A1A] cursor-pointer"
                    style={{ transition: 'background-color var(--transition-slow)' }}
                  />
                  <p className="text-xs text-slate-400 mt-1">Hover 시 느린 색상 변경</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-slate-800 mb-2">속성별 Transition</p>
              <div className="bg-slate-50 rounded-[6px] p-4 space-y-2 font-mono text-xs">
                <div><span className="text-slate-400">--transition-colors</span> <span className="text-slate-600">→ 색상 관련 (color, background-color, border-color 등)</span></div>
                <div><span className="text-slate-400">--transition-opacity</span> <span className="text-slate-600">→ 투명도 (opacity)</span></div>
                <div><span className="text-slate-400">--transition-transform</span> <span className="text-slate-600">→ 변형 (transform)</span></div>
                <div><span className="text-slate-400">--transition-all</span> <span className="text-slate-600">→ 모든 속성</span></div>
              </div>
            </div>
          </div>

          <div className="mt-4 border-t border-slate-200 pt-4">
            <p className="text-sm font-medium text-slate-800 mb-2">사용 예시</p>
            <pre className="bg-slate-900 text-slate-100 rounded-[6px] p-4 text-xs overflow-x-auto">
{`/* CSS - 색상 전환 */
.button {
  transition: var(--transition-colors) var(--transition-normal);
}

/* CSS - 투명도 전환 */
.fade {
  transition: var(--transition-opacity) var(--transition-fast);
}

/* 인라인 스타일 */
<div style={{ 
  transition: 'var(--transition-colors) var(--transition-normal)' 
}}>
  버튼
</div>`}
            </pre>
          </div>
        </div>
      </Section>

      {/* Border Radius Tokens */}
      <Section title="Border Radius 토큰" desc="모서리 둥글기를 위한 radius 값">
        <div className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div>
              <div className="h-20 bg-[#FF6B2B] flex items-center justify-center text-white text-xs font-medium" style={{ borderRadius: 'var(--radius-xs)' }}>
                xs
              </div>
              <p className="text-xs text-slate-400 mt-2 font-mono">--radius-xs</p>
              <p className="text-xs text-slate-500">3px</p>
            </div>
            <div>
              <div className="h-20 bg-[#FF6B2B] flex items-center justify-center text-white text-xs font-medium" style={{ borderRadius: 'var(--radius-sm)' }}>
                sm
              </div>
              <p className="text-xs text-slate-400 mt-2 font-mono">--radius-sm</p>
              <p className="text-xs text-slate-500">4px</p>
            </div>
            <div>
              <div className="h-20 bg-[#FF6B2B] flex items-center justify-center text-white text-xs font-medium" style={{ borderRadius: 'var(--radius-md)' }}>
                md
              </div>
              <p className="text-xs text-slate-400 mt-2 font-mono">--radius-md</p>
              <p className="text-xs text-slate-500">6px</p>
            </div>
            <div>
              <div className="h-20 bg-[#FF6B2B] flex items-center justify-center text-white text-xs font-medium" style={{ borderRadius: 'var(--radius-lg)' }}>
                lg
              </div>
              <p className="text-xs text-slate-400 mt-2 font-mono">--radius-lg</p>
              <p className="text-xs text-slate-500">8px</p>
            </div>
            <div>
              <div className="h-20 bg-[#FF6B2B] flex items-center justify-center text-white text-xs font-medium" style={{ borderRadius: 'var(--radius-xl)' }}>
                xl
              </div>
              <p className="text-xs text-slate-400 mt-2 font-mono">--radius-xl</p>
              <p className="text-xs text-slate-500">12px</p>
            </div>
            <div>
              <div className="h-20 w-20 bg-[#FF6B2B] flex items-center justify-center text-white text-xs font-medium mx-auto" style={{ borderRadius: 'var(--radius-full)' }}>
                full
              </div>
              <p className="text-xs text-slate-400 mt-2 font-mono">--radius-full</p>
              <p className="text-xs text-slate-500">9999px</p>
            </div>
          </div>

          <div className="mt-4 border-t border-slate-200 pt-4">
            <p className="text-sm font-medium text-slate-800 mb-2">프로젝트 사용 기준</p>
            <div className="bg-slate-50 rounded-[6px] p-4 space-y-2 text-xs">
              <div><span className="font-mono text-slate-600">--radius-xs (3px)</span> <span className="text-slate-500">→ 배지, 태그</span></div>
              <div><span className="font-mono text-slate-600">--radius-sm (4px)</span> <span className="text-slate-500">→ 작은 버튼, 아이콘 버튼</span></div>
              <div><span className="font-mono text-slate-600">--radius-md (6px)</span> <span className="text-slate-500">→ 카드, 테이블, 입력 필드 (기본값)</span></div>
              <div><span className="font-mono text-slate-600">--radius-lg (8px)</span> <span className="text-slate-500">→ 큰 카드, 모달</span></div>
              <div><span className="font-mono text-slate-600">--radius-xl (12px)</span> <span className="text-slate-500">→ 특별한 강조가 필요한 카드</span></div>
              <div><span className="font-mono text-slate-600">--radius-full (9999px)</span> <span className="text-slate-500">→ 원형 아바타, 완전한 둥근 버튼</span></div>
            </div>
          </div>

          <div className="mt-4 border-t border-slate-200 pt-4">
            <p className="text-sm font-medium text-slate-800 mb-2">사용 예시</p>
            <pre className="bg-slate-900 text-slate-100 rounded-[6px] p-4 text-xs overflow-x-auto">
{`/* CSS */
.card {
  border-radius: var(--radius-md);
}

.badge {
  border-radius: var(--radius-xs);
}

/* 인라인 스타일 */
<div style={{ borderRadius: 'var(--radius-md)' }}>
  카드 내용
</div>

/* Tailwind 클래스 (기존) */
<div className="rounded-[6px]">
  이것도 6px (--radius-md와 동일)
</div>`}
            </pre>
          </div>
        </div>
      </Section>

      {/* 전체 토큰 리스트 */}
      <Section title="전체 토큰 목록" desc="모든 디자인 토큰 한눈에 보기">
        <div className="space-y-6 text-xs">
          {/* Shadow */}
          <div>
            <p className="text-sm font-medium text-slate-800 mb-2">Shadow</p>
            <div className="bg-slate-50 rounded-[6px] p-4 font-mono space-y-1.5">
              <div className="text-slate-600">--shadow-xs</div>
              <div className="text-slate-600">--shadow-sm</div>
              <div className="text-slate-600">--shadow-md</div>
              <div className="text-slate-600">--shadow-lg</div>
              <div className="text-slate-600">--shadow-xl</div>
              <div className="text-slate-600">--shadow-2xl</div>
            </div>
          </div>

          {/* Transition */}
          <div>
            <p className="text-sm font-medium text-slate-800 mb-2">Transition</p>
            <div className="bg-slate-50 rounded-[6px] p-4 font-mono space-y-1.5">
              <div className="text-slate-600">--transition-fast <span className="text-slate-400 ml-2">150ms</span></div>
              <div className="text-slate-600">--transition-normal <span className="text-slate-400 ml-2">200ms</span></div>
              <div className="text-slate-600">--transition-slow <span className="text-slate-400 ml-2">300ms</span></div>
              <div className="text-slate-600">--transition-colors</div>
              <div className="text-slate-600">--transition-opacity</div>
              <div className="text-slate-600">--transition-transform</div>
              <div className="text-slate-600">--transition-all</div>
            </div>
          </div>

          {/* Border Radius */}
          <div>
            <p className="text-sm font-medium text-slate-800 mb-2">Border Radius</p>
            <div className="bg-slate-50 rounded-[6px] p-4 font-mono space-y-1.5">
              <div className="text-slate-600">--radius-xs <span className="text-slate-400 ml-2">3px</span></div>
              <div className="text-slate-600">--radius-sm <span className="text-slate-400 ml-2">4px</span></div>
              <div className="text-slate-600">--radius-md <span className="text-slate-400 ml-2">6px</span></div>
              <div className="text-slate-600">--radius-lg <span className="text-slate-400 ml-2">8px</span></div>
              <div className="text-slate-600">--radius-xl <span className="text-slate-400 ml-2">12px</span></div>
              <div className="text-slate-600">--radius-full <span className="text-slate-400 ml-2">9999px</span></div>
            </div>
          </div>

          {/* Font Weight */}
          <div>
            <p className="text-sm font-medium text-slate-800 mb-2">Font Weight</p>
            <div className="bg-slate-50 rounded-[6px] p-4 font-mono space-y-1.5">
              <div className="text-slate-600">--font-weight-normal <span className="text-slate-400 ml-2">400</span></div>
              <div className="text-slate-600">--font-weight-medium <span className="text-slate-400 ml-2">500</span></div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}