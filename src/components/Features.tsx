import { Card } from "@/components/ui/card";
import { Brain, FileUp, Zap, Target, LineChart, Award } from "lucide-react";

const features = [
  {
    icon: FileUp,
    title: "간편한 업로드",
    description: "PDF, 이미지 등 다양한 형식의 시험문제를 손쉽게 업로드하세요",
    color: "text-primary",
  },
  {
    icon: Brain,
    title: "AI 패턴 분석",
    description: "최근 5년간의 출제 경향과 패턴을 딥러닝으로 분석합니다",
    color: "text-accent",
  },
  {
    icon: Zap,
    title: "실시간 퀴즈 생성",
    description: "분석 완료 후 즉시 맞춤형 예상 문제를 생성합니다",
    color: "text-primary",
  },
  {
    icon: Target,
    title: "정확한 예측",
    description: "출제 확률이 높은 주제와 문제 유형을 우선적으로 제공합니다",
    color: "text-accent",
  },
  {
    icon: LineChart,
    title: "학습 분석",
    description: "당신의 강점과 약점을 분석하여 효율적인 학습을 지원합니다",
    color: "text-primary",
  },
  {
    icon: Award,
    title: "성적 향상 보장",
    description: "체계적인 학습으로 시험 성적 향상을 경험하세요",
    color: "text-accent",
  },
];

export const Features = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-foreground">왜 </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ExamPredictor
            </span>
            <span className="text-foreground">인가요?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            AI 기술로 시험 준비의 새로운 기준을 제시합니다
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)] group cursor-pointer border-border/50"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
