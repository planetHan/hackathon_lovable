import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileText, Image, FileCheck } from "lucide-react";

export const UploadSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              지금 바로 시작하세요
            </h2>
            <p className="text-lg text-muted-foreground">
              시험문제를 업로드하고 AI의 분석을 경험해보세요
            </p>
          </div>

          {/* Upload Card */}
          <Card className="p-8 md:p-12 border-2 border-dashed border-primary/30 hover:border-primary/50 transition-[var(--transition-smooth)] bg-card/50 backdrop-blur-sm">
            <div className="space-y-8">
              {/* Upload Area */}
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <Upload className="w-10 h-10 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-foreground">
                    파일을 드래그하거나 클릭하여 업로드
                  </h3>
                  <p className="text-muted-foreground">
                    여러 파일을 한 번에 업로드할 수 있습니다
                  </p>
                </div>
                <Button size="lg" variant="hero" className="mt-4">
                  <Upload className="w-5 h-5" />
                  파일 선택
                </Button>
              </div>

              {/* Supported Formats */}
              <div className="pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground text-center mb-4">
                  지원 형식
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50">
                    <FileText className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">PDF</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50">
                    <Image className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">이미지</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50">
                    <FileCheck className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">문서</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <Card className="p-4 bg-primary/5 border-primary/20">
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-primary">무료</div>
                <div className="text-sm text-muted-foreground">첫 3회 분석</div>
              </div>
            </Card>
            <Card className="p-4 bg-primary/5 border-primary/20">
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-primary">즉시</div>
                <div className="text-sm text-muted-foreground">결과 확인</div>
              </div>
            </Card>
            <Card className="p-4 bg-primary/5 border-primary/20">
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-primary">안전</div>
                <div className="text-sm text-muted-foreground">데이터 보호</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
