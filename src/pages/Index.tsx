import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Zap" className="text-primary" size={28} />
            <span className="text-2xl font-bold">LamboJarvis</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">Главная</button>
            <button onClick={() => scrollToSection('technology')} className="hover:text-primary transition-colors">Технология</button>
            <button onClick={() => scrollToSection('research')} className="hover:text-primary transition-colors">Исследования</button>
            <button onClick={() => scrollToSection('products')} className="hover:text-primary transition-colors">Продукты</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">О компании</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Контакты</button>
          </div>
          <Button className="glow">Связаться</Button>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Зарядка телефона
                <span className="text-primary block">силой мысли</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Революционная технология преобразования биоэлектрических импульсов мозга в энергию для ваших устройств
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="glow text-lg px-8">
                  Узнать больше
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Демо
                  <Icon name="Play" size={20} className="ml-2" />
                </Button>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl font-bold text-primary">99.8%</div>
                  <div className="text-sm text-muted-foreground">Эффективность</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-secondary">24/7</div>
                  <div className="text-sm text-muted-foreground">Работа</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">0 Вт</div>
                  <div className="text-sm text-muted-foreground">Потребление</div>
                </div>
              </div>
            </div>
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <img 
                src="https://cdn.poehali.dev/projects/d34f9663-514e-49e5-b004-0d5802718d0c/files/75ef77bb-1d31-47cd-a3c6-83cefb22df5b.jpg"
                alt="Brain Activity"
                className="relative z-10 rounded-2xl glow"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="technology" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Как это работает</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Наша патентованная технология использует нейронные импульсы для генерации электричества
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 bg-card border-primary/20 hover:border-primary transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Icon name="Brain" size={32} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Нейронный интерфейс</h3>
                  <p className="text-muted-foreground">
                    Неинвазивные сенсоры считывают электрическую активность мозга с точностью до 0.001 мВ
                  </p>
                </div>
              </div>
              <Progress value={98} className="h-2 animate-pulse-glow" />
              <div className="text-sm text-muted-foreground mt-2">Точность обнаружения: 98%</div>
            </Card>

            <Card className="p-8 bg-card border-secondary/20 hover:border-secondary transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Icon name="Zap" size={32} className="text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Преобразование энергии</h3>
                  <p className="text-muted-foreground">
                    Квантовый конвертер трансформирует биотоки в стандартное напряжение 5V/2A
                  </p>
                </div>
              </div>
              <Progress value={95} className="h-2 animate-pulse-glow" />
              <div className="text-sm text-muted-foreground mt-2">КПД преобразования: 95%</div>
            </Card>

            <Card className="p-8 bg-card border-primary/20 hover:border-primary transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Icon name="Activity" size={32} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Адаптивная система</h3>
                  <p className="text-muted-foreground">
                    ИИ оптимизирует захват энергии в зависимости от вашей активности и состояния
                  </p>
                </div>
              </div>
              <Progress value={92} className="h-2 animate-pulse-glow" />
              <div className="text-sm text-muted-foreground mt-2">Адаптация: 92%</div>
            </Card>

            <Card className="p-8 bg-card border-secondary/20 hover:border-secondary transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Icon name="Shield" size={32} className="text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Безопасность</h3>
                  <p className="text-muted-foreground">
                    Сертифицированная медицинская технология без побочных эффектов
                  </p>
                </div>
              </div>
              <Progress value={100} className="h-2 animate-pulse-glow" />
              <div className="text-sm text-muted-foreground mt-2">Уровень безопасности: 100%</div>
            </Card>
          </div>

          <div className="relative">
            <img 
              src="https://cdn.poehali.dev/projects/d34f9663-514e-49e5-b004-0d5802718d0c/files/7047ca16-cc36-41e0-9fd8-1496ace83fed.jpg"
              alt="Brain Technology"
              className="w-full rounded-2xl glow-purple"
            />
          </div>
        </div>
      </section>

      <section id="research" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Научная база</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Более 10 лет исследований в области нейробиологии и биоэнергетики
            </p>
          </div>

          <Tabs defaultValue="studies" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
              <TabsTrigger value="studies">Исследования</TabsTrigger>
              <TabsTrigger value="data">Данные</TabsTrigger>
              <TabsTrigger value="publications">Публикации</TabsTrigger>
            </TabsList>

            <TabsContent value="studies" className="space-y-6">
              <Card className="p-8 bg-card">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-primary/10 rounded-lg">
                    <Icon name="FileText" size={40} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">Исследование MIT 2023</h3>
                    <p className="text-muted-foreground mb-4">
                      Подтверждена возможность преобразования биоэлектрических сигналов с эффективностью 94.7%
                    </p>
                    <div className="flex gap-4">
                      <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">Нейробиология</span>
                      <span className="px-3 py-1 bg-secondary/20 rounded-full text-sm">Биоэнергетика</span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-card">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-secondary/10 rounded-lg">
                    <Icon name="Award" size={40} className="text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">Клинические испытания Stanford</h3>
                    <p className="text-muted-foreground mb-4">
                      2000+ участников подтвердили безопасность технологии при длительном использовании
                    </p>
                    <div className="flex gap-4">
                      <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">Клиника</span>
                      <span className="px-3 py-1 bg-secondary/20 rounded-full text-sm">Безопасность</span>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="data" className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-card">
                <h3 className="text-xl font-bold mb-4">Энергопотребление мозга</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Активное мышление</span>
                      <span className="text-primary font-bold">20 Вт</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Обычное состояние</span>
                      <span className="text-primary font-bold">12 Вт</span>
                    </div>
                    <Progress value={48} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Сон</span>
                      <span className="text-primary font-bold">8 Вт</span>
                    </div>
                    <Progress value={32} className="h-2" />
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-card">
                <h3 className="text-xl font-bold mb-4">Производительность системы</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Захват энергии</span>
                      <span className="text-secondary font-bold">98%</span>
                    </div>
                    <Progress value={98} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Преобразование</span>
                      <span className="text-secondary font-bold">95%</span>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Передача</span>
                      <span className="text-secondary font-bold">99%</span>
                    </div>
                    <Progress value={99} className="h-2" />
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="publications" className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Nature Neuroscience', year: '2023', impact: '25.8' },
                { title: 'Science', year: '2022', impact: '47.7' },
                { title: 'Cell', year: '2023', impact: '38.6' },
                { title: 'PNAS', year: '2022', impact: '11.2' },
                { title: 'Neuron', year: '2023', impact: '17.2' },
                { title: 'Nature Biotech', year: '2022', impact: '54.9' }
              ].map((pub, idx) => (
                <Card key={idx} className="p-6 bg-card hover:border-primary transition-all cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="Book" size={20} className="text-primary" />
                    <h4 className="font-bold">{pub.title}</h4>
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">{pub.year}</div>
                  <div className="text-xs bg-primary/20 px-2 py-1 rounded inline-block">
                    Impact Factor: {pub.impact}
                  </div>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="products" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши продукты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Линейка устройств для разных потребностей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-card hover:scale-105 transition-transform cursor-pointer">
              <div className="aspect-square mb-6 bg-primary/10 rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/d34f9663-514e-49e5-b004-0d5802718d0c/files/79a2fade-47df-4289-a5dd-f0e00fcac783.jpg"
                  alt="NeuroCharge Basic"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mb-2 px-3 py-1 bg-primary/20 rounded-full text-sm inline-block">Базовый</div>
              <h3 className="text-2xl font-bold mb-2">NeuroCharge Basic</h3>
              <p className="text-muted-foreground mb-4">
                Компактное устройство для повседневного использования. Заряжает смартфон за 2-3 часа активности.
              </p>
              <div className="text-3xl font-bold text-primary mb-4">$299</div>
              <Button className="w-full">Предзаказ</Button>
            </Card>

            <Card className="p-8 bg-card border-2 border-primary hover:scale-105 transition-transform cursor-pointer relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white rounded-full text-sm font-bold">
                Популярный
              </div>
              <div className="aspect-square mb-6 bg-primary/10 rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/d34f9663-514e-49e5-b004-0d5802718d0c/files/79a2fade-47df-4289-a5dd-f0e00fcac783.jpg"
                  alt="NeuroCharge Pro"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mb-2 px-3 py-1 bg-secondary/20 rounded-full text-sm inline-block">Профессиональный</div>
              <h3 className="text-2xl font-bold mb-2">NeuroCharge Pro</h3>
              <p className="text-muted-foreground mb-4">
                Расширенная версия с ИИ-оптимизацией. Заряжает за 1 час, поддержка нескольких устройств.
              </p>
              <div className="text-3xl font-bold text-primary mb-4">$599</div>
              <Button className="w-full glow">Предзаказ</Button>
            </Card>

            <Card className="p-8 bg-card hover:scale-105 transition-transform cursor-pointer">
              <div className="aspect-square mb-6 bg-secondary/10 rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/d34f9663-514e-49e5-b004-0d5802718d0c/files/79a2fade-47df-4289-a5dd-f0e00fcac783.jpg"
                  alt="NeuroCharge Ultra"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mb-2 px-3 py-1 bg-secondary/20 rounded-full text-sm inline-block">Премиум</div>
              <h3 className="text-2xl font-bold mb-2">NeuroCharge Ultra</h3>
              <p className="text-muted-foreground mb-4">
                Топовая модель для энтузиастов. Беспроводная зарядка, мониторинг здоровья, облачная аналитика.
              </p>
              <div className="text-3xl font-bold text-primary mb-4">$999</div>
              <Button className="w-full">Предзаказ</Button>
            </Card>
          </div>

          <div className="mt-16 p-8 bg-primary/10 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">Специальное предложение</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Получите скидку 20% при предзаказе до конца месяца
            </p>
            <Button size="lg" className="glow">
              Оформить предзаказ
              <Icon name="Gift" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">О LamboJarvis</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Мы — команда нейробиологов, инженеров и технологических энтузиастов, объединённых общей миссией: сделать энергию доступной везде и всегда.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                С 2014 года мы исследуем способы использования биоэлектричества человеческого тела для питания электронных устройств. Наши разработки защищены более чем 50 патентами в области биоэнергетики и нейроинтерфейсов.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Патентов</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">10k+</div>
                  <div className="text-muted-foreground">Тестировщиков</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-secondary mb-2">15</div>
                  <div className="text-muted-foreground">Стран</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-secondary mb-2">$50M</div>
                  <div className="text-muted-foreground">Инвестиций</div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="p-6 bg-card border-l-4 border-l-primary">
                <div className="flex items-start gap-4">
                  <Icon name="Target" size={32} className="text-primary" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Миссия</h3>
                    <p className="text-muted-foreground">
                      Освободить человечество от зависимости от традиционных источников энергии
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-card border-l-4 border-l-secondary">
                <div className="flex items-start gap-4">
                  <Icon name="Eye" size={32} className="text-secondary" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Видение</h3>
                    <p className="text-muted-foreground">
                      Мир, где каждый человек является собственным источником неисчерпаемой энергии
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-card border-l-4 border-l-primary">
                <div className="flex items-start gap-4">
                  <Icon name="Lightbulb" size={32} className="text-primary" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Ценности</h3>
                    <p className="text-muted-foreground">
                      Инновации, научная обоснованность, безопасность и доступность технологий
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Связаться с нами</h2>
            <p className="text-xl text-muted-foreground">
              Готовы изменить будущее энергетики вместе?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-card hover:border-primary transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Icon name="Mail" size={32} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Email</h3>
                  <p className="text-muted-foreground">info@lambojarvis.tech</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card hover:border-primary transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Icon name="Phone" size={32} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Телефон</h3>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card hover:border-secondary transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Icon name="MapPin" size={32} className="text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Офис</h3>
                  <p className="text-muted-foreground">Москва, Сколково</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card hover:border-secondary transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Icon name="Clock" size={32} className="text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Режим работы</h3>
                  <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-8 bg-card">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Сообщение</label>
                <textarea 
                  rows={6}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Расскажите о вашем проекте или задайте вопрос..."
                />
              </div>
              <Button type="submit" size="lg" className="w-full glow">
                Отправить сообщение
                <Icon name="Send" size={20} className="ml-2" />
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Icon name="Zap" className="text-primary" size={28} />
              <span className="text-xl font-bold">LamboJarvis</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Github" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitter" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Linkedin" size={24} />
              </a>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 LamboJarvis. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
