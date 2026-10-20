import React, { useState } from 'react';
import { Calendar, Clock, Edit2, RotateCcw, X } from 'lucide-react';
import { INITIAL_SCHEDULE, ClassScheduleItem } from '../data/danceData';

interface ClassScheduleSectionProps {
  initialFilterStyle?: string;
  onBookSlot: (classItem: ClassScheduleItem) => void;
}

export const ClassScheduleSection: React.FC<ClassScheduleSectionProps> = ({
  initialFilterStyle = 'All',
  onBookSlot,
}) => {
  const [scheduleList, setScheduleList] = useState<ClassScheduleItem[]>(INITIAL_SCHEDULE);
  const [selectedStyle, setSelectedStyle] = useState<string>(initialFilterStyle);
  const [selectedDay, setSelectedDay] = useState<string>('All');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [editingItem, setEditingItem] = useState<ClassScheduleItem | null>(null);

  React.useEffect(() => {
    if (initialFilterStyle && initialFilterStyle !== 'All') {
      setSelectedStyle(initialFilterStyle);
    }
  }, [initialFilterStyle]);

  const styleOptions = ['All', 'Kids Dance', 'Bollywood', 'Hip-Hop', 'Contemporary', 'Freestyle', 'Advanced Training'];
  const dayOptions = ['All', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const levelOptions = ['All', 'Beginner', 'Intermediate', 'Advanced', 'All levels'];

  const filteredSchedule = scheduleList.filter((item) => {
    const matchStyle =
      selectedStyle === 'All' ||
      item.danceStyle.toLowerCase().includes(selectedStyle.toLowerCase()) ||
      selectedStyle.toLowerCase().includes(item.danceStyle.toLowerCase());

    const matchDay = selectedDay === 'All' || item.days.includes(selectedDay);

    const matchLevel = selectedLevel === 'All' || item.level === selectedLevel;

    return matchStyle && matchDay && matchLevel;
  });

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem) return;

    setScheduleList((prev) =>
      prev.map((item) => (item.id === editingItem.id ? editingItem : item))
    );
    setEditingItem(null);
  };

  const handleResetSchedule = () => {
    setScheduleList(INITIAL_SCHEDULE);
    setEditingItem(null);
  };

  return (
    <section id="class-schedule" className="py-28 bg-[#FAF6F0] text-[#26160F] relative border-t border-[#E5D9CB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#8C5535] uppercase font-bold mb-2">
              <span>03. Timetable & Cohort Schedule</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-extrabold uppercase tracking-tight text-[#26160F] leading-none">
              WEEKLY CLASS TIMINGS
            </h2>
          </div>

          {/* Owner demo mode toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsEditMode(!isEditMode)}
              type="button"
              className={`flex items-center gap-2 text-xs font-mono px-3.5 py-2 rounded-lg border transition-colors ${
                isEditMode
                  ? 'bg-[#26160F] text-[#FAF6F0] border-[#26160F]'
                  : 'bg-[#FFFDFB] text-[#5C3D2E] border-[#E5D9CB] hover:border-[#26160F] hover:text-[#26160F]'
              }`}
            >
              <Edit2 className="w-3.5 h-3.5 text-[#8C5535]" />
              <span>{isEditMode ? 'Exit Admin Editor' : 'Owner Demo: Edit Timings'}</span>
            </button>

            {isEditMode && (
              <button
                onClick={handleResetSchedule}
                type="button"
                className="flex items-center gap-1.5 text-xs font-mono text-[#5C3D2E] hover:text-[#26160F] bg-[#FFFDFB] px-3 py-2 rounded-lg border border-[#E5D9CB]"
                title="Reset to default schedule"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Filters Strip */}
        <div className="bg-[#FFFDFB] border border-[#E5D9CB] rounded-2xl p-5 sm:p-6 mb-8 space-y-4 shadow-sm">
          {/* Style Filter */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8C5535] font-bold w-24 shrink-0">
              Dance Style:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {styleOptions.map((style) => (
                <button
                  key={style}
                  onClick={() => setSelectedStyle(style)}
                  type="button"
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                    selectedStyle === style
                      ? 'bg-[#26160F] text-[#FAF6F0] shadow-sm'
                      : 'bg-[#F3ECE2] text-[#3D271D] hover:bg-[#E5D9CB]'
                  }`}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>

          {/* Day Filter */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 pt-3 border-t border-[#E5D9CB]">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8C5535] font-bold w-24 shrink-0">
              Day:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {dayOptions.map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  type="button"
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                    selectedDay === day
                      ? 'bg-[#26160F] text-[#FAF6F0] shadow-sm'
                      : 'bg-[#F3ECE2] text-[#3D271D] hover:bg-[#E5D9CB]'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          {/* Level Filter */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 pt-3 border-t border-[#E5D9CB]">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8C5535] font-bold w-24 shrink-0">
              Level:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {levelOptions.map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setSelectedLevel(lvl)}
                  type="button"
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                    selectedLevel === lvl
                      ? 'bg-[#26160F] text-[#FAF6F0] shadow-sm'
                      : 'bg-[#F3ECE2] text-[#3D271D] hover:bg-[#E5D9CB]'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Schedule Display */}
        {filteredSchedule.length === 0 ? (
          <div className="text-center py-16 bg-[#FFFDFB] rounded-2xl border border-[#E5D9CB]">
            <Calendar className="w-8 h-8 text-[#8C5535] mx-auto mb-3" />
            <p className="text-[#3D271D] font-medium">No sessions match your selected filters.</p>
            <button
              onClick={() => {
                setSelectedStyle('All');
                setSelectedDay('All');
                setSelectedLevel('All');
              }}
              type="button"
              className="mt-3 text-xs text-[#26160F] underline font-bold"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-2xl border border-[#E5D9CB] bg-[#FFFDFB] shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#F3ECE2] text-xs font-mono uppercase tracking-wider text-[#26160F] border-b border-[#E5D9CB]">
                <tr>
                  <th className="py-4 px-6">Dance Style</th>
                  <th className="py-4 px-6">Days</th>
                  <th className="py-4 px-6">Time</th>
                  <th className="py-4 px-6">Level</th>
                  <th className="py-4 px-6 hidden md:table-cell">Studio & Faculty</th>
                  <th className="py-4 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5D9CB]">
                {filteredSchedule.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-[#F8F4EE] transition-colors group"
                  >
                    <td className="py-5 px-6 font-display font-bold text-lg text-[#26160F] group-hover:text-[#8C5535] transition-colors">
                      <div className="flex items-center gap-2">
                        <span>{item.danceStyle}</span>
                        {isEditMode && (
                          <button
                            onClick={() => setEditingItem(item)}
                            className="p-1 rounded bg-[#F3ECE2] hover:bg-[#26160F] text-[#26160F] hover:text-[#FAF6F0] text-xs"
                            title="Edit this timing slot"
                          >
                            <Edit2 className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                    </td>

                    <td className="py-5 px-6 text-[#5C3D2E] font-mono text-xs font-semibold">
                      {item.dayDisplay}
                    </td>

                    <td className="py-5 px-6 font-mono text-xs text-[#26160F]">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#8C5535]" />
                        <span className="font-semibold">{item.time}</span>
                      </div>
                    </td>

                    <td className="py-5 px-6">
                      <span className="text-xs font-mono text-[#26160F] bg-[#F3ECE2] px-2.5 py-1 rounded font-semibold border border-[#E5D9CB]">
                        {item.level}
                      </span>
                    </td>

                    <td className="py-5 px-6 text-xs text-[#5C3D2E] hidden md:table-cell">
                      <div className="flex flex-col">
                        <span className="text-[#26160F] font-semibold">{item.studio}</span>
                        <span className="text-[#8C5535]">Coach: {item.instructor}</span>
                      </div>
                    </td>

                    <td className="py-5 px-6 text-right">
                      <button
                        onClick={() => onBookSlot(item)}
                        type="button"
                        className="px-4 py-2 bg-[#26160F] hover:bg-[#3D271D] text-[#FAF6F0] text-xs font-bold uppercase tracking-wider rounded-md transition-colors shadow-sm whitespace-nowrap"
                      >
                        Book Slot
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#5C3D2E]">
          <span>* All timings are listed in local standard time. Arrive 10 minutes prior for warm-up.</span>
          <span className="mt-1 sm:mt-0 text-[#26160F] font-semibold">
            Sprung floors active · Capacity limited to 22 dancers per cohort
          </span>
        </div>
      </div>

      {/* Admin Quick Edit Modal */}
      {editingItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
          <form
            onSubmit={handleSaveEdit}
            className="w-full max-w-md bg-[#FFFDFB] border border-[#E5D9CB] p-6 rounded-2xl shadow-2xl text-[#26160F] space-y-4"
          >
            <div className="flex items-center justify-between border-b border-[#E5D9CB] pb-3">
              <h3 className="font-display font-bold uppercase text-lg text-[#26160F]">
                Edit Schedule Slot
              </h3>
              <button
                type="button"
                onClick={() => setEditingItem(null)}
                className="text-[#5C3D2E] hover:text-[#26160F]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div>
              <label className="text-xs font-mono text-[#8C5535] font-bold block mb-1">Dance Style</label>
              <input
                type="text"
                value={editingItem.danceStyle}
                onChange={(e) => setEditingItem({ ...editingItem, danceStyle: e.target.value })}
                className="w-full bg-[#FAF6F0] border border-[#E5D9CB] rounded-lg px-3 py-2 text-sm text-[#26160F] focus:border-[#26160F] focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-mono text-[#8C5535] font-bold block mb-1">Days (Display)</label>
              <input
                type="text"
                value={editingItem.dayDisplay}
                onChange={(e) => setEditingItem({ ...editingItem, dayDisplay: e.target.value })}
                className="w-full bg-[#FAF6F0] border border-[#E5D9CB] rounded-lg px-3 py-2 text-sm text-[#26160F] focus:border-[#26160F] focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-mono text-[#8C5535] font-bold block mb-1">Time Range</label>
              <input
                type="text"
                value={editingItem.time}
                onChange={(e) => setEditingItem({ ...editingItem, time: e.target.value })}
                className="w-full bg-[#FAF6F0] border border-[#E5D9CB] rounded-lg px-3 py-2 text-sm text-[#26160F] focus:border-[#26160F] focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-mono text-[#8C5535] font-bold block mb-1">Level</label>
              <select
                value={editingItem.level}
                onChange={(e) =>
                  setEditingItem({
                    ...editingItem,
                    level: e.target.value as 'Beginner' | 'Intermediate' | 'Advanced' | 'All levels',
                  })
                }
                className="w-full bg-[#FAF6F0] border border-[#E5D9CB] rounded-lg px-3 py-2 text-sm text-[#26160F] focus:border-[#26160F] focus:outline-none"
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="All levels">All levels</option>
              </select>
            </div>

            <div className="pt-2 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setEditingItem(null)}
                className="px-4 py-2 text-xs font-mono text-[#5C3D2E] hover:text-[#26160F]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-[#26160F] hover:bg-[#3D271D] text-[#FAF6F0] text-xs font-bold uppercase rounded-lg"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
};
