import { Card } from "@/components/ui/card";
import { Upload, Sparkles, BookOpen, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "시험문제 업로드",
    description: "과거 시험문제 파일을 업로드하세요. PDF, 이미지, 문서 형식 모두 지원합니다.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "AI 분석 시작",
    description: "AI가 출제 패턴, 난이도, 주제 분포를 자동으로 분석합니다.",
  },
  {
    number: "03",
    icon: BookOpen,
    title: "맞춤 퀴즈 생성",
    description: "분석 결과를 바탕으로 예상 문제가 자동 생성됩니다.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "학습 및 피드백",
    description: "퀴즈를 풀고 상세한 피드백과 함께 실력을 향상시키세요.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            어떻게 작동하나요?
          </h2>
          <p className="text-lg text-muted-foreground">
            4단계로 완성되는 스마트한 시험 준비
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-primary/20" />
                )}
                
                <Card className="p-6 h-full hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)] border-border/50">
                  <div className="space-y-4">
                    {/* Number Badge */}
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground font-bold text-xl">
                      {step.number}
                    </div>
                    
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
