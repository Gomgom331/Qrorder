import { useState } from 'react';
import {
  Plus, Trash2, GripVertical, ChevronUp, ChevronDown,
  Sparkles, CheckCircle2, AlertCircle, Pencil, Check, X,
  Layers,
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { InputField } from '../../components/ui/InputField';
import { Modal, ModalBtn } from '../../components/ui/Modal';
import { Tag } from '../../components/ui/Tag';

// ─── Types ────────────────────────────────────────────────────────
interface Category {
  id: string;
  name: string;
  menuCount: number;
  sortIndex: number;
  isCustom: boolean; // true = 직접 입력, false = 관리자 추천
}

// ─── Admin recommended categories ─────────────────────────────────
const ADMIN_RECOMMENDED = [
  '한식', '일식', '중식', '양식', '분식', '디저트',
  '음료', '사이드메뉴', '면 요리', '구이류', '해산물',
  '샐러드', '세트메뉴', '도시락', '스낵', '주류',
];

// ─── Mock existing data ────────────────────────────────────────────
const INITIAL_CATEGORIES: Category[] = [
  { id: '1', name: '한식',   menuCount: 5, sortIndex: 0, isCustom: false },
  { id: '2', name: '일식',   menuCount: 3, sortIndex: 1, isCustom: false },
  { id: '3', name: '음료',   menuCount: 2, sortIndex: 2, isCustom: false },
];

// ─── Duplicate confirm modal ───────────────────────────────────────
interface DuplicateModalProps {
  open: boolean;
  name: string;
  existingMenus: string[];
  onConfirm: () => void;
  onCancel: () => void;
}

function DuplicateModal({ open, name, existingMenus, onConfirm, onCancel }: DuplicateModalProps) {
  return (
    <Modal
      open={open}
      onClose={onCancel}
      size="sm"
      title="카테고리 중복 확인"
      footer={
        <>
          <ModalBtn variant="outline" onClick={onCancel}>취소</ModalBtn>
          <ModalBtn variant="primary" onClick={onConfirm}>
            중복 허용하여 추가
          </ModalBtn>
        </>
      }
    >
      <div className="space-y-3">
        <div className="flex items-start gap-2.5">
          <AlertCircle size={16} className="text-amber-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-slate-700">
              <strong className="text-slate-900">"{name}"</strong> 카테고리는 이미 등록되어 있습니다.
            </p>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              중복 허용 시 같은 이름의 카테고리가 2개 생성됩니다.<br />
              메뉴를 분류해서 나누고 싶을 때 사용하세요.
            </p>
          </div>
        </div>
        {existingMenus.length > 0 && (
          <div className="bg-amber-50 border border-amber-100 rounded-[6px] p-3">
            <p className="text-xs font-medium text-amber-700 mb-1.5">기존 "{name}" 카테고리 메뉴</p>
            <div className="flex flex-wrap gap-1">
              {existingMenus.map((m) => (
                <span key={m} className="text-xs bg-white border border-amber-200 text-amber-700 px-1.5 py-0.5 rounded-[3px]">
                  {m}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
}

// ─── Main ──────────────────────────────────────────────────────────
export function ClientCategoryManagement() {
  const [categories, setCategories] = useState<Category[]>(INITIAL_CATEGORIES);
  const [customInput, setCustomInput] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState('');

  // Duplicate modal state
  const [dupModal, setDupModal] = useState<{ open: boolean; name: string; sourceType: 'recommend' | 'custom' }>({
    open: false, name: '', sourceType: 'recommend',
  });

  // Delete confirm
  const [deleteTarget, setDeleteTarget] = useState<Category | null>(null);

  // ── Helper: does name already exist? ──
  const existsAlready = (name: string) =>
    categories.some((c) => c.name.trim() === name.trim());

  const getMenusInCategory = (name: string): string[] => {
    // Mock: return menu names for this category
    const map: Record<string, string[]> = {
      '한식': ['불고기 정식', '김치찌개', '된장찌개', '비빔밥', '제육볶음'],
      '일식': ['돈까스', '우동', '카레라이스'],
      '음료': ['콜라', '사이다'],
    };
    return map[name] ?? [];
  };

  // ── Add recommended category ──
  const handleAddRecommended = (name: string) => {
    if (existsAlready(name)) {
      setDupModal({ open: true, name, sourceType: 'recommend' });
      return;
    }
    doAddCategory(name, false);
  };

  // ── Add custom category ──
  const handleAddCustom = () => {
    const name = customInput.trim();
    if (!name) return;
    if (existsAlready(name)) {
      setDupModal({ open: true, name, sourceType: 'custom' });
      return;
    }
    doAddCategory(name, true);
    setCustomInput('');
  };

  // ── Actually add ──
  const doAddCategory = (name: string, isCustom: boolean) => {
    const newCat: Category = {
      id: String(Date.now()),
      name,
      menuCount: 0,
      sortIndex: categories.length,
      isCustom,
    };
    setCategories([...categories, newCat]);
  };

  // ── Duplicate confirm ──
  const handleDupConfirm = () => {
    doAddCategory(dupModal.name, dupModal.sourceType === 'custom');
    if (dupModal.sourceType === 'custom') setCustomInput('');
    setDupModal({ open: false, name: '', sourceType: 'recommend' });
  };

  // ── Delete ──
  const handleDelete = (cat: Category) => {
    if (cat.menuCount > 0) {
      setDeleteTarget(cat);
      return;
    }
    setCategories(categories.filter((c) => c.id !== cat.id));
  };

  const confirmDelete = () => {
    if (!deleteTarget) return;
    setCategories(categories.filter((c) => c.id !== deleteTarget.id));
    setDeleteTarget(null);
  };

  // ── Rename inline ──
  const startEdit = (cat: Category) => {
    setEditingId(cat.id);
    setEditingName(cat.name);
  };

  const saveEdit = () => {
    const name = editingName.trim();
    if (!name) { setEditingId(null); return; }
    setCategories(categories.map((c) => c.id === editingId ? { ...c, name } : c));
    setEditingId(null);
  };

  // ── Move up/down ──
  const move = (id: string, dir: 'up' | 'down') => {
    const sorted = [...categories].sort((a, b) => a.sortIndex - b.sortIndex);
    const idx = sorted.findIndex((c) => c.id === id);
    const target = dir === 'up' ? idx - 1 : idx + 1;
    if (target < 0 || target >= sorted.length) return;
    const updated = sorted.map((c, i) => {
      if (i === idx) return { ...c, sortIndex: sorted[target].sortIndex };
      if (i === target) return { ...c, sortIndex: sorted[idx].sortIndex };
      return c;
    });
    setCategories(updated);
  };

  const sortedCategories = [...categories].sort((a, b) => a.sortIndex - b.sortIndex);
  const alreadyAdded = new Set(categories.map((c) => c.name));

  return (
    <div className="p-4 md:p-5 lg:p-6 space-y-5">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-sm">
        <span className="text-slate-400">메뉴 관리</span>
        <span className="text-slate-300">/</span>
        <span className="text-slate-800 font-medium">메뉴 분류 (카테고리)</span>
      </nav>

      {/* Layout: 2-col on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-5">

        {/* ── Left: 추가 패널 ── */}
        <div className="space-y-4">

          {/* 관리자 추천 카테고리 */}
          <div className="bg-white border border-slate-200 rounded-[6px] overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 bg-blue-50/60">
              <Sparkles size={14} className="text-blue-500" />
              <h3 className="text-sm font-semibold text-slate-700">관리자 추천 카테고리</h3>
            </div>
            <div className="p-4">
              <p className="text-xs text-slate-500 mb-3 leading-relaxed">
                클릭하면 내 카테고리에 추가됩니다. 이미 추가된 항목은 다시 클릭하면 중복 추가 여부를 확인합니다.
              </p>
              <div className="flex flex-wrap gap-2">
                {ADMIN_RECOMMENDED.map((name) => {
                  const added = alreadyAdded.has(name);
                  return (
                    <button
                      key={name}
                      onClick={() => handleAddRecommended(name)}
                      className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-[4px] text-xs font-medium transition-all border ${
                        added
                          ? 'bg-emerald-50 border-emerald-200 text-emerald-600'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-[#FF6B2B] hover:text-[#FF6B2B] hover:bg-orange-50'
                      }`}
                    >
                      {added && <CheckCircle2 size={11} />}
                      {name}
                      {!added && <Plus size={10} />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 직접 입력 */}
          <div className="bg-white border border-slate-200 rounded-[6px] overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100">
              <Layers size={14} className="text-slate-500" />
              <h3 className="text-sm font-semibold text-slate-700">카테고리 직접 입력</h3>
            </div>
            <div className="p-4">
              <p className="text-xs text-slate-500 mb-3">
                추천 목록에 없는 카테고리를 직접 입력해서 등록할 수 있습니다.
              </p>
              <div className="flex gap-2">
                <div className="flex-1">
                  <InputField
                    inputSize="md"
                    placeholder="카테고리명 입력 (예: 스팀요리)"
                    value={customInput}
                    onChange={(e) => setCustomInput(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') handleAddCustom(); }}
                  />
                </div>
                <Button
                  variant="primary"
                  size="md"
                  onClick={handleAddCustom}
                  disabled={!customInput.trim()}
                  leftIcon={<Plus size={14} />}
                >
                  추가
                </Button>
              </div>
              <p className="text-[11px] text-slate-400 mt-2">
                Enter 또는 [추가] 버튼으로 등록합니다.
              </p>
            </div>
          </div>
        </div>

        {/* ── Right: 내 카테고리 목록 ── */}
        <div className="bg-white border border-slate-200 rounded-[6px] overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 bg-slate-50">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-semibold text-slate-800">내 카테고리 목록</h3>
              <span className="text-xs text-slate-400">총 {categories.length}개</span>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">↕ 위아래 버튼으로 순서를 변경하세요</p>
          </div>

          {sortedCategories.length === 0 ? (
            <div className="py-16 text-center">
              <Layers size={36} className="mx-auto text-slate-200 mb-3" />
              <p className="text-sm text-slate-400">아직 등록된 카테고리가 없습니다</p>
              <p className="text-xs text-slate-300 mt-1">추천 카테고리를 선택하거나 직접 입력해보세요</p>
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {sortedCategories.map((cat, idx) => (
                <div key={cat.id} className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors group">
                  {/* Drag handle */}
                  <GripVertical size={15} className="text-slate-200 group-hover:text-slate-400 shrink-0 cursor-grab" />

                  {/* Sort index badge */}
                  <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-semibold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>

                  {/* Name (inline edit) */}
                  <div className="flex-1 min-w-0">
                    {editingId === cat.id ? (
                      <div className="flex items-center gap-2">
                        <input
                          value={editingName}
                          onChange={(e) => setEditingName(e.target.value)}
                          onKeyDown={(e) => { if (e.key === 'Enter') saveEdit(); if (e.key === 'Escape') setEditingId(null); }}
                          autoFocus
                          className="flex-1 px-2 py-1 text-sm border border-[#FF6B2B] rounded-[4px] focus:outline-none ring-2 ring-[#FF6B2B]/20"
                        />
                        <Button variant="icon" size="sm" onClick={saveEdit} iconOnly={<Check size={13} />} className="text-emerald-500 hover:bg-emerald-50" />
                        <Button variant="icon" size="sm" onClick={() => setEditingId(null)} iconOnly={<X size={13} />} className="text-slate-400 hover:bg-slate-100" />
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-slate-800">{cat.name}</span>
                        {cat.isCustom ? (
                          <Tag color="orange" variant="soft" size="sm">직접 입력</Tag>
                        ) : (
                          <Tag color="blue" variant="soft" size="sm">추천</Tag>
                        )}
                        <span className="text-xs text-slate-400">메뉴 {cat.menuCount}개</span>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  {editingId !== cat.id && (
                    <div className="flex items-center gap-1 shrink-0">
                      <Button
                        variant="icon"
                        size="sm"
                        onClick={() => move(cat.id, 'up')}
                        disabled={idx === 0}
                        iconOnly={<ChevronUp size={13} />}
                        className="text-slate-300 hover:text-[#FF6B2B] hover:bg-orange-50 disabled:opacity-20 disabled:cursor-not-allowed"
                      />
                      <Button
                        variant="icon"
                        size="sm"
                        onClick={() => move(cat.id, 'down')}
                        disabled={idx === sortedCategories.length - 1}
                        iconOnly={<ChevronDown size={13} />}
                        className="text-slate-300 hover:text-[#FF6B2B] hover:bg-orange-50 disabled:opacity-20 disabled:cursor-not-allowed"
                      />
                      <Button
                        variant="icon"
                        size="sm"
                        onClick={() => startEdit(cat)}
                        iconOnly={<Pencil size={13} />}
                        className="text-slate-300 hover:text-slate-600 hover:bg-slate-100"
                      />
                      <Button
                        variant="icon"
                        size="sm"
                        onClick={() => handleDelete(cat)}
                        iconOnly={<Trash2 size={13} />}
                        className="text-slate-300 hover:text-red-500 hover:bg-red-50"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Footer tip */}
          {sortedCategories.length > 0 && (
            <div className="px-4 py-3 border-t border-slate-100 bg-slate-50/60">
              <p className="text-xs text-slate-400">
                카테고리 순서는 <strong className="text-slate-500">고객 메뉴판</strong>에 그대로 노출됩니다.
                메뉴판 탭에서 메뉴별 세부 순서를 편집할 수 있습니다.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* ── Duplicate Modal ── */}
      <DuplicateModal
        open={dupModal.open}
        name={dupModal.name}
        existingMenus={getMenusInCategory(dupModal.name)}
        onConfirm={handleDupConfirm}
        onCancel={() => setDupModal({ open: false, name: '', sourceType: 'recommend' })}
      />

      {/* ── Delete confirm with menu count ── */}
      <Modal
        open={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        size="sm"
        title="카테고리 삭제"
        footer={
          <>
            <ModalBtn variant="outline" onClick={() => setDeleteTarget(null)}>취소</ModalBtn>
            <ModalBtn variant="danger" onClick={confirmDelete}>삭제</ModalBtn>
          </>
        }
      >
        {deleteTarget && (
          <div className="space-y-3">
            <div className="flex items-start gap-2.5">
              <AlertCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-slate-700">
                  <strong>"{deleteTarget.name}"</strong> 카테고리에{' '}
                  <strong className="text-red-500">메뉴 {deleteTarget.menuCount}개</strong>가 등록되어 있습니다.
                </p>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  카테고리를 삭제하면 해당 메뉴들의 분류가 해제됩니다.
                  메뉴는 삭제되지 않으며, 다른 카테고리에 재배정할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}