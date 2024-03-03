import { IconBank, IconDev, IconEagle, IconFlower, IconLion, IconNote, IconSchool } from "./Icon";

interface propsIcon {
  classNameIcon?: string;
  className?: string;
}

function BadgeEagle({ classNameIcon, className }: propsIcon) {
  return (
    <div className={`inline-block p-1 rounded-full overflow-hidden bg-slate-300 dark:bg-slate-600` + " " + className}>
      <IconEagle className={classNameIcon} />
    </div>
  );
}

function BadgeBendahara({ classNameIcon, className }: propsIcon) {
  return (
    <div className={`inline-block p-1 text-green-600 dark:text-green-400 rounded-full overflow-hidden bg-slate-300 dark:bg-slate-600` + " " + className}>
      <IconBank className={classNameIcon} />
    </div>
  );
}

function BadgeSekretaris({ classNameIcon, className }: propsIcon) {
  return (
    <div className={`inline-block p-1 text-yellow-600 dark:text-yellow-400 rounded-full overflow-hidden bg-slate-300 dark:bg-slate-600` + " " + className}>
      <IconNote className={classNameIcon} />
    </div>
  );
}

function BadgeDevTeam({ classNameIcon, className }: propsIcon) {
  return (
    <div className={`inline-block p-1 text-red-600 dark:text-red-400 rounded-full overflow-hidden bg-slate-300 dark:bg-slate-600` + " " + className}>
      <IconDev className={classNameIcon} />
    </div>
  );
}

function BadgeViceChairman({ classNameIcon, className }: propsIcon) {
  return (
    <div className={`inline-block p-1 text-teal-600 dark:text-green-500 rounded-full overflow-hidden bg-slate-300 dark:bg-slate-600` + " " + className}>
      <IconLion className={classNameIcon} />
    </div>
  );
}

function BadgeChairman({ classNameIcon, className }: propsIcon) {
  return (
    <div className={`inline-block p-1 text-sky-600 dark:text-sky-400 rounded-full overflow-hidden bg-slate-300 dark:bg-slate-600` + " " + className}>
      <IconLion className={classNameIcon} />
    </div>
  );
}

function BadgeOsis({ classNameIcon, className }: propsIcon) {
  return (
    <div className={`inline-block p-1 rounded-full overflow-hidden bg-slate-300 dark:bg-slate-600` + " " + className}>
      <IconSchool className={classNameIcon} />
    </div>
  );
}

function BadgeFlower({ classNameIcon, className }: propsIcon) {
  return (
    <div className={`inline-block p-1 rounded-full overflow-hidden bg-slate-300 dark:bg-slate-600` + " " + className}>
      <IconFlower className={classNameIcon} />
    </div>
  );
}

export { BadgeBendahara, BadgeChairman, BadgeDevTeam, BadgeEagle, BadgeFlower, BadgeOsis, BadgeSekretaris, BadgeViceChairman };

