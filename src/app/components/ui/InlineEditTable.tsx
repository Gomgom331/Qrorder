/**
 * InlineEditTable
 * ──────────────────────────────────────────────────────────────────
 * 인라인 편집 테이블 공통 컴포넌트
 *
 * 특징
 * - 행 클릭으로 선택 / 재클릭으로 해제
 * - 헤더 툴바: ↑ ↓  +행추가  −행삭제  저장
 * - 신규 행: 연한 앰버 배경, 선택 행: 주황 좌측 border
 * - 컬럼 타입: 'input' | 'input-readonly' | 'checkbox'
 *   - 'input'          → 항상 편집 가능
 *   - 'input-readonly' → 기존 행은 readOnly, 신규 행만 편집 가능
 *   - 'checkbox'       → CheckboxField (boolean 값)
 */

import React, { useState } from 'react';
import { ChevronUp, ChevronDown, Check } from 'lucide-react';
import { Button } from './Button';
import { InputField } from './InputField';
import { CheckboxField } from './CheckboxField';

// ─── Types ───────────────────────────────────────────────────────

export type InlineColumnType = 'input' | 'input-readonly' | 'checkbox';

export interface InlineColumnDef<T> {
  /** 데이터 키 */
  key: keyof T;
  /** 헤더 레이블 */
  label: string;
  /** 컬럼 타입 (기본값: 'input') */
  type?: InlineColumnType;
  /** th/td 추가 className (ex. "w-20 text-center") */
  className?: string;
  /** InputField placeholder */
  placeholder?: string;
}

export interface InlineRow {
  id: string | number;
  isNew?: boolean;
  [key: string]: unknown;
}

export interface InlineEditTableProps<T extends InlineRow> {
  /** 테이블 상단 좌측 타이틀 */
  title?: string;
  /** 타이틀 옆 배지용 텍스트 (예: 마스터 코드명) */
  badge?: string;
  /** 컬럼 정의 */
  columns: InlineColumnDef<T>[];
  /** 현재 행 목록 */
  rows: T[];
  /** 선택된 행 id */
  selectedId: string | number | null;
  /** 행 선택 변경 콜백 */
  onSelect: (id: string | number | null) => void;
  /** 행 목록 변경 콜백 (행추가·삭제·이동·셀 수정 모두 이 콜백으로) */
  onChange: (rows: T[]) => void;
  /** 신규 행 추가 시 기본값 (id·isNew 제외) */
  newRowDefaults: Omit<T, 'id' | 'isNew'>;
  /** 저장 버튼 표시 여부 (기본 true) */
  showSave?: boolean;
  /** 저장 버튼 클릭 콜백 */
  onSave?: () => void;
  /** 저장완료 상태 (true면 "저장완료" 텍스트 + 체크 아이콘) */
  savedMsg?: boolean;
  /** 비어있을 때 표시할 문구 */
  emptyText?: string;
  /** 테이블 비활성화 (행추가·삭제·저장 버튼 disabled) */
  disabled?: boolean;
}

// ─── Component ───────────────────────────────────────────────────

export function InlineEditTable<T extends InlineRow>({
  title,
  badge,
  columns,
  rows,
  selectedId,
  onSelect,
  onChange,
  newRowDefaults,
  showSave = true,
  onSave,
  savedMsg = false,
  emptyText = '데이터가 없습니다.',
  disabled = false,
}: InlineEditTableProps<T>) {
  const selectedIdx = rows.findIndex((r) => r.id === selectedId);

  /* ── 순서 이동 ── */
  const moveRow = (dir: -1 | 1) => {
    if (selectedIdx < 0) return;
    const next = [...rows];
    const target = selectedIdx + dir;
    if (target < 0 || target >= next.length) return;
    [next[selectedIdx], next[target]] = [next[target], next[selectedIdx]];
    onChange(next);
  };

  /* ── 행 추가 ── */
  const addRow = () => {
    const newId = `new_${Date.now()}`;
    const newRow = { ...newRowDefaults, id: newId, isNew: true } as T;
    onChange([...rows, newRow]);
    onSelect(newId);
  };

  /* ── 행 삭제 ── */
  const deleteRow = () => {
    if (selectedId !== null) {
      onChange(rows.filter((r) => r.id !== selectedId));
      onSelect(null);
    } else {
      onChange(rows.slice(0, -1));
    }
  };

  /* ── 셀 값 변경 ── */
  const updateCell = (id: string | number, key: keyof T, value: unknown) => {
    onChange(rows.map((r) => (r.id === id ? { ...r, [key]: value } : r)));
  };

  /* ── 행 클릭 ── */
  const handleRowClick = (id: string | number) => {
    onSelect(selectedId === id ? null : id);
  };

  /* ── 헤더 th className ── */
  const thCls = (col: InlineColumnDef<T>) =>
    [
      'px-3 py-2.5 text-xs font-medium text-slate-500',
      col.type === 'checkbox' ? 'text-center' : 'text-left',
      col.className ?? '',
    ].join(' ');

  /* ── 셀 렌더 ── */
  const renderCell = (row: T, col: InlineColumnDef<T>) => {
    const type = col.type ?? 'input';
    const value = row[col.key];

    if (type === 'checkbox') {
      return (
        <td key={String(col.key)} className="px-3 py-[5px] text-center">
          <CheckboxField
            size="sm"
            checked={Boolean(value)}
            onChange={(e) => updateCell(row.id, col.key, e.target.checked)}
          />
        </td>
      );
    }

    const isReadOnly = type === 'input-readonly' && !row.isNew;
    return (
      <td key={String(col.key)} className="px-3 py-[5px]">
        <InputField
          inputSize="sm"
          value={String(value ?? '')}
          onChange={(e) => updateCell(row.id, col.key, e.target.value)}
          placeholder={col.placeholder}
          readOnly={isReadOnly}
        />
      </td>
    );
  };

  /* ── Render ── */
  return (
    <div className="border border-slate-200 rounded-[6px] overflow-hidden bg-white">

      {/* 툴바 */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-slate-100 bg-white">
        {/* 좌측: 타이틀 + 배지 */}
        <div className="flex items-center gap-2">
          {title && (
            <span className="text-sm font-medium text-slate-800">{title}</span>
          )}
          {badge && (
            <span className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded-[3px]">
              {badge}
            </span>
          )}
          {rows.length > 0 && (
            <span className="text-xs bg-[#FF6B2B]/10 text-[#FF6B2B] px-2 py-0.5 rounded-[3px] font-medium">
              {rows.length}건
            </span>
          )}
        </div>

        {/* 우측: 순서 이동 + 행추가·삭제 + 저장 */}
        <div className="flex items-center gap-1">
          <Button
            variant="icon"
            size="sm"
            disabled={disabled || selectedIdx <= 0}
            onClick={() => moveRow(-1)}
            title="위로"
          >
            <ChevronUp size={14} />
          </Button>
          <Button
            variant="icon"
            size="sm"
            disabled={disabled || selectedIdx < 0 || selectedIdx >= rows.length - 1}
            onClick={() => moveRow(1)}
            title="아래로"
          >
            <ChevronDown size={14} />
          </Button>

          <Button
            variant="ghost"
            size="sm"
            disabled={disabled}
            onClick={addRow}
          >
            <span className="text-base leading-none mr-0.5">+</span> 행추가
          </Button>
          <Button
            variant="ghost"
            size="sm"
            disabled={disabled || rows.length === 0}
            onClick={deleteRow}
            className="text-red-500 hover:bg-red-50 hover:text-red-600 disabled:text-slate-300 disabled:hover:bg-transparent"
          >
            <span className="text-base leading-none mr-0.5">−</span> 행삭제
          </Button>

          {showSave && (
            <Button
              variant="outline"
              size="sm"
              disabled={disabled}
              onClick={onSave}
            >
              {savedMsg ? (
                <><Check size={12} className="mr-1" />저장완료</>
              ) : (
                '저장'
              )}
            </Button>
          )}
        </div>
      </div>

      {/* 테이블 */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              {columns.map((col) => (
                <th key={String(col.key)} className={thCls(col)}>
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="py-10 text-center text-slate-400 text-sm"
                >
                  {emptyText}
                </td>
              </tr>
            ) : (
              rows.map((row) => {
                const isSelected = selectedId === row.id;
                return (
                  <tr
                    key={row.id}
                    onClick={() => handleRowClick(row.id)}
                    className={[
                      'cursor-pointer transition-colors',
                      isSelected
                        ? 'bg-[#FF6B2B]/5 border-l-2 border-l-[#FF6B2B]'
                        : row.isNew
                        ? 'bg-amber-50/40 hover:bg-amber-50/70'
                        : 'hover:bg-slate-50',
                    ].join(' ')}
                  >
                    {columns.map((col) => renderCell(row, col))}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── useInlineTable hook ──────────────────────────────────────────
/**
 * InlineEditTable 상태 관리 훅
 * rows, selectedId, savedMsg 상태와 핸들러를 한 번에 제공
 */
export function useInlineTable<T extends InlineRow>(initial: T[]) {
  const [rows, setRows]           = useState<T[]>(initial);
  const [selectedId, setSelectedId] = useState<string | number | null>(null);
  const [savedMsg, setSavedMsg]   = useState(false);

  const handleSave = () => {
    setSavedMsg(true);
    setTimeout(() => setSavedMsg(false), 2000);
  };

  return {
    rows,
    setRows,
    selectedId,
    setSelectedId,
    savedMsg,
    handleSave,
  };
}
