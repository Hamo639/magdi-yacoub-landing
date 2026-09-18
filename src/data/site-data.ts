import { Award, BookOpen, GraduationCap, Heart, HeartPulse, Hospital, Medal, Microscope, Stethoscope } from "lucide-react";

export const navLinks = [
  { label: "عن مجدي يعقوب", href: "#about" },
   { label: "الإنجازات", href: "#achievements" },
  { label: "المسيرة", href: "#journey" },
 
  { label: "المؤسسة", href: "#foundation" },
];
export const achievements = [
  {
    icon: HeartPulse,
    value: "+2,500",
    title: "عملية زراعة",
    description:
      "أُجريت ضمن برنامج زراعة القلب والرئة الذي أسسه في مستشفى هارفيلد.",
  },
  {
    icon: BookOpen,
    value: "+1,400",
    title: "بحث علمي منشور",
    description:
      "أبحاث ومؤلفات علمية في زراعة الأعضاء وجراحات القلب وأمراض القلب.",
  },
  {
    icon: Award,
    value: "2014",
    title: "وسام الاستحقاق",
    description:
      "حصل على وسام الاستحقاق البريطاني تقديرًا لإسهاماته العلمية والطبية.",
  },
  {
    icon: Medal,
    value: "2015",
    title: "ميدالية ليستر",
    description:
      "حصل على ميدالية ليستر تقديرًا لإسهاماته البارزة في علم الجراحة.",
  },
];
export const highlights = [
  {
    icon: Stethoscope,
    title: "جراحة القلب",
    description:
      "مسيرة طبية كرّسها لتطوير جراحات القلب والارتقاء بمستوى الرعاية المقدمة للمرضى.",
  },
  {
    icon: Microscope,
    title: "البحث العلمي",
    description:
      "إسهامات علمية وبحثية تهدف إلى تطوير فهم أمراض القلب وابتكار أساليب جديدة لعلاجها.",
  },
  {
    icon: Heart,
    title: "العمل الإنساني",
    description:
      "جهود متواصلة لإتاحة رعاية قلبية متخصصة وعالية الجودة للمرضى الأكثر احتياجًا.",
  },
];
export 
const journey = [
  {
    year: "1935",
    icon: GraduationCap,
    title: "البداية",
    description:
      "وُلد مجدي يعقوب في مدينة بلبيس بمصر، وبدأت رحلته التي قادته لاحقًا إلى أن يصبح أحد أبرز الأسماء في جراحة القلب.",
  },
  {
    year: "1962",
    icon: HeartPulse,
    title: "الانطلاق في جراحة القلب",
    description:
      "انتقل إلى المملكة المتحدة، حيث واصل تدريبه ومسيرته المهنية في جراحة القلب والصدر.",
  },
  {
    year: "1973",
    icon: Hospital,
    title: "مستشفى هارفيلد",
    description:
      "بدأ العمل في مستشفى هارفيلد، الذي أصبح لاحقًا مركزًا مهمًا في مسيرته في جراحات وزراعة القلب.",
  },
  {
    year: "1995",
    icon: Microscope,
    title: "مؤسسة Chain of Hope",
    description:
      "أسس مؤسسة Chain of Hope بهدف مساعدة الأطفال الذين يحتاجون إلى رعاية وجراحات قلب متخصصة.",
  },
];