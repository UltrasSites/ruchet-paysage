import type { Lang } from './utils';

export interface ServiceItem {
  title: string;
  desc: string;
}

export interface GalleryImage {
  label: string;
  alt: string;
  src: string;
}

const gallerySrcs = [
  "/photos/jardin-alpin.jpg",
  "/photos/maison-massifs.jpg",
  "/photos/cour-pavee.jpg",
  "/photos/tonte-pelouse.jpg",
  "/photos/desherbage.jpg",
  "/photos/souffleuse-neige.jpg",
];

const servicesData: ServiceItem[] = [
  { title: "Création paysagère", desc: "Conception et réalisation complète de votre extérieur — massifs, allées, terrasses, espaces verts. Un projet pensé pour durer, adapté à votre terrain." },
  { title: "Tonte & entretien", desc: "Tonte régulière, fauchage, débroussaillage. Un jardin toujours net, géré au rythme des saisons." },
  { title: "Taille & élagage", desc: "Haies, arbustes et arbres fruitiers. Coupes raisonnées pour favoriser la santé et la croissance de vos végétaux." },
  { title: "Désherbage & plantation", desc: "Désherbage manuel ou raisonné, choix et mise en place de plantes adaptées au sol et au climat de la région." },
  { title: "Nettoyage extérieur", desc: "Terrasses bois, béton, pierres naturelles, carrelage extérieur — nettoyage et entretien pour leur redonner tout leur éclat." },
  { title: "Déneigement", desc: "Service hivernal manuel (pelle, racleur, sel) ou mécanique (souffleuse, saleuse). Vos accès dégagés en toute sécurité." },
];

const galleryLabels: Omit<GalleryImage, 'src'>[] = [
  { label: "Création paysagère", alt: "Jardin alpin créé par Ruchet Paysage en Suisse" },
  { label: "Aménagement extérieur", alt: "Maison de montagne avec massifs fleuris" },
  { label: "Cour & dallage", alt: "Cour pavée avec haie taillée" },
  { label: "Tonte de pelouse", alt: "Pelouse fraîchement tondue, tondeuse autoportée" },
  { label: "Désherbage", alt: "Désherbage manuel raisonné" },
  { label: "Déneigement", alt: "Souffleuse à neige en action" },
];

export function getServices(_lang: Lang): ServiceItem[] {
  return servicesData;
}

export function getGallery(_lang: Lang): GalleryImage[] {
  return gallerySrcs.map((src, i) => ({ ...galleryLabels[i], src }));
}

export interface TranslationsType {
  hero_badge: string;
  hero_title1: string;
  hero_title2: string;
  hero_lead: string;
  hero_demo: string;
  hero_cta_quote: string;
  hero_cta_services: string;
  hero_footer_note: string;
  section_entreprise_label: string;
  section_entreprise_title1: string;
  section_entreprise_title2: string;
  section_entreprise_p1: string;
  section_entreprise_p2: string;
  section_entreprise_li1: string;
  section_entreprise_li2: string;
  section_entreprise_li3: string;
  section_services_label: string;
  section_services_title: string;
  section_galerie_title: string;
  section_avant_apres_label: string;
  section_avant_apres_title: string;
  section_avant_apres_lead: string;
  contact_label: string;
  contact_title1: string;
  contact_title2: string;
  contact_lead: string;
  contact_email_label: string;
  contact_ultras: string;
  contact_phone_label: string;
  contact_phone_demo: string;
  contact_zone_label: string;
  contact_zone_note: string;
  form_title: string;
  form_name: string;
  form_place: string;
  form_email: string;
  form_phone: string;
  form_message: string;
  form_submit: string;
  plan_label: string;
  plan_title: string;
  plan_p: string;
  plan_note: string;
  nav_entreprise: string;
  nav_services: string;
  nav_galerie: string;
  nav_contact: string;
  nav_cta_contact: string;
  nav_cta_devis: string;
  nav_brand_sub: string;
  footer_brand: string;
  footer_copyright: string;
  drawer_theme: string;
  drawer_devis: string;
  aria_menu: string;
  drawer_swipe_hint: string;
}

const fr: TranslationsType = {
  hero_badge: 'Paysagiste · Corbeyrier · Vaud',
  hero_title1: 'Valorisation',
  hero_title2: 'de vos extérieurs.',
  hero_lead: "Création, entretien, taille, nettoyage et déneigement — un travail soigné, fiable et durable. Julien Ruchet, paysagiste indépendant à Corbeyrier, Suisse.",
  hero_demo: '',
  hero_cta_quote: 'Demander un devis',
  hero_cta_services: 'Mes prestations',
  hero_footer_note: 'Devis gratuit · Intervention canton de Vaud',
  section_entreprise_label: 'À propos',
  section_entreprise_title1: "L'excellence au service",
  section_entreprise_title2: 'de vos extérieurs.',
  section_entreprise_p1: "Jeune entrepreneur passionné, Julien Ruchet met 5 ans d'expérience au service de vos espaces verts. Un travail soigné, fiable et pensé pour durer.",
  section_entreprise_p2: "Ruchet Paysage intervient pour les particuliers et les propriétés du canton de Vaud : création, entretien, taille, nettoyage, déneigement.",
  section_entreprise_li1: 'Devis transparent et détaillé',
  section_entreprise_li2: 'Travail soigné, respect du végétal',
  section_entreprise_li3: 'Intervention dans tout le canton',
  section_services_label: 'Savoir-faire',
  section_services_title: 'Mes prestations',
  section_galerie_title: 'Mes chantiers',
  section_avant_apres_label: 'Réalisation',
  section_avant_apres_title: 'Avant · Après',
  section_avant_apres_lead: "Faites glisser pour voir la transformation. Débroussaillage et remise en état d'un terrain en pente — un exemple de ce que Ruchet Paysage réalise dans la région.",
  contact_label: 'Contact',
  contact_title1: 'Parlons de',
  contact_title2: 'votre projet.',
  contact_lead: "Un devis ? Une question ? Un projet de jardin ? Écrivez ou appelez directement — réponse rapide.",
  contact_email_label: 'Email',
  contact_ultras: 'info@ruchetpaysage.ch',
  contact_phone_label: 'Téléphone',
  contact_phone_demo: '075 414 76 97',
  contact_zone_label: "Zone d'intervention",
  contact_zone_note: "Tout le canton de Vaud : Aigle, Yvorne, Villeneuve, Montreux, Vevey, Lausanne et alentours.",
  form_title: 'Demande de devis',
  form_name: 'Nom complet',
  form_place: 'Localité',
  form_email: 'Email',
  form_phone: 'Téléphone',
  form_message: 'Décrivez votre projet (création, taille, entretien, déneigement...)',
  form_submit: 'Envoyer ma demande',
  plan_label: 'Localisation',
  plan_title: 'Basé à Corbeyrier (VD).',
  plan_p: "1856 Corbeyrier, canton de Vaud (Suisse)",
  plan_note: "Lun-Ven 07:00 - 18:00 · Devis selon distance au-delà de la riviera vaudoise.",
  nav_entreprise: 'À propos',
  nav_services: 'Prestations',
  nav_galerie: 'Réalisations',
  nav_contact: 'Contact',
  nav_cta_contact: 'Contact',
  nav_cta_devis: 'Devis',
  nav_brand_sub: 'Paysagisme · Déneigement',
  footer_brand: 'Ruchet Paysage',
  footer_copyright: '© Ruchet Paysage ·',
  drawer_theme: '',
  drawer_devis: 'Demander un devis',
  aria_menu: 'Ouvrir le menu',
  drawer_swipe_hint: 'Glissez pour fermer',
};

export const translations: Record<Lang, TranslationsType> = { fr };
