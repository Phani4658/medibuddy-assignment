import { missingIcon } from "@/helpers/constants";
import { Icon } from "@/types/types";

function GetHeroIcon({ icon }: { icon: Icon }) {
  return (
    <li key={icon.order}>
      <a
        href={icon.deeplink}
        className="flex flex-col items-center justify-center text-center space-y-1"
      >
        <img src={icon.iconUrl} className="h-14 w-14" alt={icon.iconTag} />
        <p className="text-sm w-[105px] whitespace-normal break-words">
          {icon.iconText}
        </p>{" "}
      </a>
    </li>
  );
}

export default function HeroIcons({ iconsInfo }: { iconsInfo: any }) {
  const finalIcons = [...missingIcon, ...iconsInfo.props];
  return (
    <ul className="grid grid-cols-3 gap-3">
      {finalIcons.map((icon: Icon) => (
        <GetHeroIcon key={icon.order} icon={icon} />
      ))}
    </ul>
  );
}
