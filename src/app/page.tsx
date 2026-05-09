"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TeamCardEleven from '@/components/sections/team/TeamCardEleven';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Sparkles, Smile, Award, CheckCircle2, UserCheck, HeartPulse } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="largeSmall"
        background="circleGradient"
        cardStyle="outline"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        { name: "Home", id: "hero" },
        { name: "About", id: "about" },
        { name: "Services", id: "services" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="SmileCare Clinic"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{ variant: "radial-gradient" }}
      title="Seu Sorriso, Nossa Paixão."
      description="Atendimento odontológico humanizado com tecnologia de ponta para cuidar da sua saúde bucal."
      tag="Clínica Odontológica Especializada"
      mediaItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/positive-bearded-male-doctor-smiling-points-away-space-text-white-background-attractive-intern-wearing-uniform-looking-confident-isolated_574295-6094.jpg", imageAlt: "Dentista atendendo paciente" },
        { imageSrc: "http://img.b2bpic.net/free-photo/beautiful-girl-dentist_1157-18608.jpg", imageAlt: "Equipamentos odontológicos modernos" }
      ]}
      mediaAnimation="slide-up"
      rating={5}
      ratingText="Mais de 5.000 sorrisos realizados"
      tagIcon={Sparkles}
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={true}
      title="Por que nos escolher?"
      metrics={[
        { label: "Anos de Experiência", value: "15+", icon: Award },
        { label: "Pacientes Satisfeitos", value: "5000+", icon: Smile },
        { label: "Procedimentos Realizados", value: "12000+", icon: CheckCircle2 }
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Ortodontia",          description: "Alinhamento perfeito com tecnologia digital.",          items: [
            { icon: CheckCircle2, text: "Aparelhos Invisíveis" },
            { icon: CheckCircle2, text: "Manutenção Mensal" }
          ],
          reverse: false,
          media: { imageSrc: "http://img.b2bpic.net/free-photo/coffe-shop-with-wooden-walls-unfocused_1203-1230.jpg", imageAlt: "Ortodontia" }
        },
        {
          title: "Implantes",          description: "Recupere sua função mastigatória.",          items: [
            { icon: CheckCircle2, text: "Implantes em Titânio" },
            { icon: CheckCircle2, text: "Enxerto Ósseo" }
          ],
          reverse: true,
          media: { imageSrc: "http://img.b2bpic.net/free-photo/dentist-performing-teeth-whitening_23-2148396218.jpg", imageAlt: "Implantes" }
        },
        {
          title: "Estética",          description: "O sorriso dos seus sonhos.",          items: [
            { icon: CheckCircle2, text: "Clareamento" },
            { icon: CheckCircle2, text: "Lentes de Contato" }
          ],
          reverse: false,
          media: { imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-doctor-crossed-hands-front-white-wall_158595-7667.jpg", imageAlt: "Estética" }
        }
      ]}
      title="Nossos Especialistas"
      description="Oferecemos uma gama completa de tratamentos para o seu sorriso."
    />
  </div>

  <div id="features" data-section="features">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        { id: "p1", name: "Clareamento a Laser", price: "R$ 499", imageSrc: "http://img.b2bpic.net/free-photo/nurse-dentist-showing-green-screen-display-stomatology-senior-doctor-while-examining-tooth-pain-man-patient-sittinh-dental-chair_482257-4900.jpg" },
        { id: "p2", name: "Limpeza Profissional", price: "R$ 250", imageSrc: "http://img.b2bpic.net/free-photo/dental-tools-equipment-white-background_1232-4444.jpg" },
        { id: "p3", name: "Avaliação Inicial", price: "R$ 150", imageSrc: "http://img.b2bpic.net/free-photo/front-view-female-doctor-smiling-yellow-space_179666-13672.jpg" }
      ]}
      title="Tratamentos Avançados"
      description="Confira nossos procedimentos de referência."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        { id: "t1", name: "Ana Oliveira", role: "Empresária", testimonial: "Atendimento incrível, me senti muito segura e confortável.", imageSrc: "http://img.b2bpic.net/free-photo/surprised-woman-with-hands-up-amazed-shocked-by-unexpected-news_273609-13734.jpg" },
        { id: "t2", name: "Carlos Silva", role: "Engenheiro", testimonial: "Melhor clínica que já frequentei. Tecnologia de ponta.", imageSrc: "http://img.b2bpic.net/free-photo/positive-carefree-female-teenager-makes-peace-gesture-eyes-smiles-toothily-feels-glad-forgets-about-troubles-dressed-casual-green-t-shirt-isolated-white-background-body-language_273609-61748.jpg" },
        { id: "t3", name: "Beatriz Lima", role: "Professora", testimonial: "Meu sorriso mudou completamente, estou super feliz!", imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-happy-man-beach_23-2149031173.jpg" }
      ]}
      title="O que dizem nossos pacientes"
      description="Veja como transformamos vidas através do sorriso."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      groups={[
        {
          id: "g1",          groupTitle: "Odontologia Clínica",          members: [
            { id: "m1", title: "Dra. Maria", subtitle: "Diretora Clínica", detail: "15 anos de experiência.", imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-dentist-dentist-s-office_329181-20725.jpg" },
            { id: "m2", title: "Dr. João", subtitle: "Especialista", detail: "Mestre em Ortodontia.", imageSrc: "http://img.b2bpic.net/free-photo/female-graphic-designer-using-digital-tablet_1170-999.jpg" },
            { id: "m3", title: "Dra. Carla", subtitle: "Higiene Oral", detail: "Especialista em Prevenção.", imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-afro-american-woman_23-2148332136.jpg" }
          ]
        }
      ]}
      title="Nossos Especialistas"
      description="Conheça os profissionais que cuidam do seu sorriso."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        { id: "f1", title: "Como agendo uma avaliação?", content: "Pelo WhatsApp ou telefone." },
        { id: "f2", title: "Aceitam convênios?", content: "Sim, aceitamos os principais planos." },
        { id: "f3", title: "Qual a duração do tratamento?", content: "Varia de caso para caso." }
      ]}
      sideTitle="Dúvidas Frequentes"
      sideDescription="Respostas rápidas para você ficar tranquilo."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{ variant: "radial-gradient" }}
      tag="Agende seu horário"
      title="Pronto para um novo sorriso?"
      description="Entre em contato conosco e marque sua avaliação."
      buttons={[{ text: "WhatsApp" }, { text: "Agendar online" }]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="SmileCare Clinic"
      columns={[
        {
          title: "Links",          items: [
            { label: "Sobre", href: "#about" },
            { label: "Serviços", href: "#services" }
          ]
        },
        {
          title: "Contato",          items: [
            { label: "WhatsApp", href: "#" },
            { label: "Telefone", href: "#" }
          ]
        }
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
