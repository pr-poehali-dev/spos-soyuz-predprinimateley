import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <Icon name="Flag" className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">СПО России</h1>
              <p className="text-xs text-muted-foreground">Союз Предпринимателей</p>
            </div>
          </div>
          <Button className="bg-secondary hover:bg-secondary/90">
            Присоединиться
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 border-4 border-accent rounded-full"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-block mb-6 px-6 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent">
              <p className="text-accent font-semibold">Наша страна — наши правила</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Мы собрались —<br />мы реальная сила
            </h1>
            <p className="text-xl mb-4 text-white/90 leading-relaxed">
              Союз Предпринимателей России объединяет предпринимателей, учёных, активистов и экспертов из 47 регионов страны для защиты национальных интересов и реализации указов Президента.
            </p>
            <p className="text-2xl mb-10 font-semibold text-accent">
              Будущее зависит от твоего участия
            </p>
            <Button size="lg" className="bg-accent text-foreground hover:bg-accent/90 font-bold text-lg px-8 py-6 shadow-2xl">
              Присоединиться к СПО
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">Кто мы</h2>
              <div className="w-24 h-1 bg-accent mx-auto"></div>
            </div>
            <Card className="border-2 border-primary/20 shadow-lg">
              <CardContent className="p-8">
                <p className="text-lg mb-6 leading-relaxed">
                  Союз Предпринимателей России (СПО) — это общественное движение гражданской инициативы, созданное для защиты прав отечественного бизнеса и участия в государственном управлении.
                </p>
                <p className="text-lg mb-8 font-semibold text-primary">
                  Мы не просто лоббируем интересы — мы участвуем в формировании новой финансовой, налоговой и информационной политики страны.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { icon: "Briefcase", text: "Предприниматели среднего и малого бизнеса" },
                    { icon: "GraduationCap", text: "Учёные-космисты и научное сообщество" },
                    { icon: "Users", text: "Гражданские активисты из 47 субъектов РФ" },
                    { icon: "Award", text: "Эксперты народного проекта «За референдум» (2020)" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name={item.icon} className="text-white" size={20} />
                      </div>
                      <p className="text-foreground">{item.text}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">Что мы делаем</h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-4"></div>
              <p className="text-lg text-muted-foreground">
                Мы действуем строго в рамках закона РФ, но решительно и с гражданской ответственностью
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: "FileText", title: "Разрабатываем экспертные предложения", desc: "для законопроектов" },
                { icon: "Send", title: "Направляем официальные обращения", desc: "в Государственную Думу и правительственные структуры" },
                { icon: "Eye", title: "Ведём народный контроль", desc: "за исполнением указов Президента на местах" },
                { icon: "DollarSign", title: "Отслеживаем распределение бюджета", desc: "чтобы поддержка шла отечественному бизнесу" },
                { icon: "Brain", title: "Анализируем влияние медиа", desc: "на общество по указу №809" },
                { icon: "Shield", title: "Выявляем агентов влияния", desc: "и деструктивные силы" },
                { icon: "Volume2", title: "Публично озвучиваем результаты", desc: "и информируем органы власти" },
                { icon: "BookOpen", title: "Проводим консультации", desc: "по вопросам государственного управления" }
              ].map((item, idx) => (
                <Card key={idx} className="hover:shadow-xl transition-shadow border-l-4 border-l-secondary">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-secondary via-secondary to-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Наши ключевые реформы</h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-4"></div>
              <p className="text-xl text-white/90">
                Мы настаиваем на системных изменениях в интересах России
              </p>
            </div>
            <div className="space-y-6">
              {[
                { icon: "Coins", title: "Суверенный рубль", desc: "валюта национального достоинства, а не «билет ЦБ»" },
                { icon: "Building2", title: "Подчинение Центробанка", desc: "исполнительной власти для служения экономике" },
                { icon: "TrendingUp", title: "Использование ЗВР", desc: "на развитие реального сектора экономики" },
                { icon: "Calculator", title: "Налоговая система", desc: "которая поддерживает средний бизнес и производство" }
              ].map((item, idx) => (
                <Card key={idx} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} className="text-primary" size={28} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-1 text-accent">{item.title}</h3>
                      <p className="text-white/90 text-lg">{item.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Icon name="Quote" className="mx-auto mb-6 text-accent" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-relaxed">
              Мы не ждём перемен — мы их создаём.<br />
              Наше единство — основа суверенитета.<br />
              Наш голос — воля народа и бизнеса.
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                { icon: "ThumbsUp", text: "Поддержка в Госдуме" },
                { icon: "Target", text: "Участие в реформах" },
                { icon: "Shield", text: "Защита прав предпринимателя" }
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon} className="text-primary" size={32} />
                  </div>
                  <p className="font-semibold text-lg">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">Присоединяйся сегодня</h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-4"></div>
              <p className="text-xl text-muted-foreground">
                Будущее России — в твоих руках. Стань частью движения!
              </p>
            </div>
            <Card className="border-2 border-primary shadow-2xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Имя и Фамилия *</label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Иван Иванов"
                      className="border-primary/30 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email *</label>
                    <Input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@example.com"
                      className="border-primary/30 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Телефон *</label>
                    <Input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+7 (999) 123-45-67"
                      className="border-primary/30 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Компания / Организация</label>
                    <Input
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Название компании"
                      className="border-primary/30 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Сообщение</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Расскажите о себе и вашем интересе к СПО"
                      className="border-primary/30 focus:border-primary min-h-32"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-lg font-bold py-6">
                    Отправить заявку
                    <Icon name="Send" className="ml-2" size={20} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">Часто задаваемые вопросы</h2>
              <div className="w-24 h-1 bg-accent mx-auto"></div>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg px-6 border-2 border-primary/20">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  Кто может вступить в СПО?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  Любой предприниматель, активист, эксперт или гражданин РФ, разделяющий нашу миссию по защите национальных интересов и укреплению суверенитета России.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-lg px-6 border-2 border-primary/20">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  Есть ли членские взносы?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  Информация о взносах предоставляется после подачи заявки. Мы работаем на принципах прозрачности и справедливости.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-lg px-6 border-2 border-primary/20">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  Как СПО отличается от РСПП?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  Мы — не корпоративное лобби, а гражданское движение с патриотической и государственной повесткой, ориентированное на суверенитет, народный контроль и реальные реформы в интересах России.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white rounded-lg px-6 border-2 border-primary/20">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  Как проходит участие в СПО?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  После одобрения заявки вы получите доступ к участию в экспертных группах, обсуждениях законопроектов, мероприятиях и прямому взаимодействию с государственными структурами.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-accent">Контакты</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" className="text-accent mt-1" size={20} />
                    <p>350000, г. Краснодар, ул. Красноармейская, д. 36, офис 605</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Building" className="text-accent mt-1" size={20} />
                    <p>Общественное движение гражданской инициативы «Союз Предпринимателей России»</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-accent">Присоединяйся</h3>
                <p className="mb-4">Стань частью движения, которое меняет будущее России</p>
                <Button className="bg-accent text-primary hover:bg-accent/90 font-bold">
                  Заполнить заявку
                  <Icon name="ArrowRight" className="ml-2" size={18} />
                </Button>
              </div>
            </div>
            <div className="border-t border-white/20 pt-8 text-center">
              <p className="text-white/80">© 2024 Союз Предпринимателей России. Все права защищены.</p>
              <p className="text-accent font-semibold mt-2">Наша страна — наши правила</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
