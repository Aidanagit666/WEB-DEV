import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../models/product.models';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})


export class ProductListComponent {
  products: Product[] = [
    {
      id: 113137790,
      name: 'Набор автомобильный 46 в 1 TORNADO',
      description:
        'Набор инструментов TORNADO 46 в 1 — незаменимый помощник для автолюбителей и профессионалов, обеспечивающий высокую функциональность и компактность.',
      price: 1528,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1e/h87/84180460830750.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h1e/h87/84180460830750.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p33/p9c/71103063.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p17/p9c/71103064.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/nabor-avtomobil-nyi-46-v-1-tornado-167867549-113829427/?c=750000000',
    },
    {
      id: 116684101,
      name: 'Чехол для Apple iPhone 15 прозрачный',
      description:
        'Надежный и стильный чехол для защиты от царапин и ударов. Повторяет форму устройства и сохраняет доступ ко всем кнопкам и камере.',
      price: 170,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h37/heb/83726315159582.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h37/heb/83726315159582.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h37/heb/83726315159582.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h37/heb/83726315159582.jpg?format=gallery-small',
      ],
      link: 'https://kaspi.kz/shop/p/chehol-dlja-apple-iphone-15-prozrachnyi-113282830/?c=750000000',
    },
    {
      id: 128386583,
      name: 'Вешалка напольная металлическая',
      description:
        'Прочная напольная вешалка из металла для одежды. Надежная конструкция, подходит для дома и офиса, хорошо вписывается в интерьер.',
      price: 4109,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h60/he1/84668650291230.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h60/he1/84668650291230.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/had/hfd/83825341333534.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h30/hc0/83825341530142.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/veshalka-napol-naja-izox-metall-110x150-sm-chernyi-113366378/?c=750000000',
    },
    {
      id: 102875265,
      name: 'ТераФлю Саше 325 мг 10 шт',
      description:
        'Средство для симптоматического лечения простуды и гриппа. Удобная форма саше, подходит для домашней аптечки.',
      price: 2497,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc9/hcf/87293798088734.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc9/hcf/87293798088734.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc9/hcf/87293798088734.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hc9/hcf/87293798088734.jpg?format=gallery-small',
      ],
      link: 'https://kaspi.kz/shop/p/teraflju-sashe-325-mg-10-sht-124283396/?c=750000000',
    },
    {
      id: 121691395,
      name: 'Ластик Maped Technic Duo 2B',
      description:
        'Ластик для удаления следов карандаша и чернил. Удобная форма, подходит для школы и офиса.',
      price: 10,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h56/h80/86018938044446.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h56/h80/86018938044446.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd6/h74/86018938077214.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h50/ha5/86587902820382.jpg?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/lastik-maped-technic-duo-511710-1-sht-103885134/?c=750000000',
    },
    {
      id: 121692808,
      name: 'MISS TAIS Mauve карандаш 765',
      description:
        'Сочетание идеальной гипоаллергенной формулы и деревянного корпуса из калифорнийского кедра делает нанесение макияжа не только комфортным, но и предпочтительным для же',
      price: 120,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p1c/p41/18255089.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pa6/p88/18255090.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p2a/p6e/64203728.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p1c/p41/18255089.jpeg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/miss-tais-mauve-karandash-765-100155528/?c=750000000',
    },
    {
      id: 121693378,
      name: 'Bioderma крем sebium hydra для 40мл',
      description:
        'В период лечения тяжелых форм акне кожа может очень сильно сохнуть, трескаться, раздражаться и испытывать общий дискомфорт. Крем Bioderma Sébium Hydra помогает восстановить кожу, качественно и надолго увлажнить ее и успокоить. Результаты тестов показывают, что после 14 дней использования в 89% случаев дерматологи, наблюдающие пациентов, заметили разницу.',
      price: 7600,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p6c/p0a/83177267.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pc4/pea/107684099.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9b/pbd/25952389.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p2f/pbb/25952390.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/bioderma-krem-sebium-hydra-dlja-litsa-40-ml-17600059/?c=750000000',
    },
    {
      id: 113138220,
      name: 'Планшет LCD для рисования пластик 10.',
      description:
        'Стереть (сбросить) рисунок можно только после установки в планшет батарейки и перевода переключателя блокировки стирания в положение разблокировки стирания.Без установленной батарейки стирание (сброс) рисунка вообще работать не будет.',
      price: 548,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p39/p6b/5853944.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p39/p6b/5853944.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p1d/p6b/5853945.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p39/p6b/5853944.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/planshet-lcd-planshet-dlja-risovanija-plastik-106688749/?c=750000000',
    },
    {
      id: 123890381,
      name: 'Сумка Portcase 9011 до 15.6" черный',
      description:
        'Сумка Portcase 9011 — это идеальное решение для тех, кто ценит стиль и функциональность. Она обеспечивает надежную защиту вашего ноутбука до 15.6 дюймов, а также имеет достаточно места для аксессуаров и документов. Эргономичная ручка и регулируемый плечевой ремень обеспечивают комфорт при переноске, а современный дизайн делает эту сумку отличным выбором для повседневного использования и деловых поездок.',
      price: 3359,
      rating: 4.2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h93/h2b/69003730550814.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hfb/hea/69003731075102.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p1c/p41/18255089.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p2f/pbb/25952390.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/sumka-portcase-9011-do-15-6-chernyi-108895248/?c=750000000',
    },
    {
      id: 144392065,
      name: 'Подставка для ноутбука Notestand',
      description:
        'Подставка NoteStand 6.67" 8/256GB NFC черный — это мощное устройство с большим экраном, большим объемом памяти и поддержкой NFC для удобных платежей и обмена данными. Идеальный выбор для тех, кто ценит производительность и функциональность в одном устройстве.',
      price: 999,
      rating: 4.2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa3/pdc/17497973.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p87/pdc/17497974.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p6a/pdc/17497975.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p4e/pdc/17497976.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/notestand-102983515/?c=750000000',
    },
  ];
private toNumber(value: number | string): number {
  if (typeof value === 'number') return value;
  return Number(value.toString().replace(/\s/g, '').replace(',', '.')) || 0;
}

 sortAscending() {
  this.products = [...this.products].sort((a, b) => this.toNumber(a.price) - this.toNumber(b.price));
}

sortDescending() {
  this.products = [...this.products].sort((a, b) => this.toNumber(b.price) - this.toNumber(a.price));
}


}
