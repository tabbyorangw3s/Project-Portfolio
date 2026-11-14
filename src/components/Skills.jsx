import {
  AppWindow,
  BookOpen,
  Braces,
  Code,
  Coffee,
  Database,
  FileCode,
  Hash,
  Layers,
  Lightbulb,
  Mic,
  Palette,
  PenTool,
  Smartphone,
  Users,
} from "lucide-react";
import {
  siC,
  siCplusplus,
  siJavascript,
  siKotlin,
  siPhp,
  siPython,
  siTypescript,
} from "simple-icons";
import { skillGroups } from "../data/skills";
import SectionBlock from "./SectionBlock";
import SparkleIcon from "./SparkleIcon";

const iconMap = {
  AppWindow,
  BookOpen,
  Braces,
  Code,
  Coffee,
  Database,
  FileCode,
  Hash,
  Layers,
  Lightbulb,
  Mic,
  Palette,
  PenTool,
  Smartphone,
  Users,
};

const brandIconMap = {
  C: siC,
  CPlusPlus: siCplusplus,
  Kotlin: siKotlin,
  PHP: siPhp,
  Python: siPython,
  JavaScript: siJavascript,
  TypeScript: siTypescript,
};

const chipTones = ["chip-pink", "chip-yellow", "chip-blue"];

export default function Skills() {
  return (
    <SectionBlock
      id="skills"
      labelledBy="skills-title"
      title="Skills"
      text="Languages, tools, and practices I use in school and in projects."
      doodle={<SparkleIcon size={28} className="intro-doodle" />}
    >
      <div className="skill-groups">
        {skillGroups.map((group) => (
          <div key={group.id} className="skill-group">
            <div className="skill-group-heading">
              <h3>{group.label}</h3>
              <span>{String(group.items.length).padStart(2, "0")}</span>
            </div>
            <ul aria-label={`${group.label} skills`}>
              {group.items.map((item, index) => {
                const Icon = iconMap[item.icon] || Code;
                const brandIcon = brandIconMap[item.brand];
                const hasBrandIcon = brandIcon || item.logo;
                return (
                  <li
                    key={item.name}
                    className={`skill-card ${chipTones[index % chipTones.length]}`}
                  >
                    <span className={`skill-card-icon${hasBrandIcon ? " has-brand-icon" : ""}`}>
                      {brandIcon ? (
                        <svg
                          viewBox="0 0 24 24"
                          aria-label={`${item.name} logo`}
                          role="img"
                          style={{ color: `#${brandIcon.hex}` }}
                        >
                          <path d={brandIcon.path} fill="currentColor" />
                        </svg>
                      ) : item.logo ? (
                        <img src={item.logo} alt={`${item.name} logo`} />
                      ) : (
                        <Icon size={19} strokeWidth={1.75} aria-hidden="true" />
                      )}
                    </span>
                    <span className="skill-card-name">{item.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </SectionBlock>
  );
}
