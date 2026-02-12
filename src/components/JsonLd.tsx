export default function JsonLd() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'ديار جدة العالمية للمظلات والسواتر',
        image: [
            'https://deyarsu.com/logo.svg',
            'https://deyarsu.com/favicon.svg'
        ],
        '@id': 'https://deyarsu.com',
        url: 'https://deyarsu.com',
        telephone: '+966553719009',
        priceRange: '$$',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'طريق الحرمين',
            addressLocality: 'جدة',
            postalCode: '21442',
            addressRegion: 'منطقة مكة المكرمة',
            addressCountry: 'SA'
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 21.543333,
            longitude: 39.172778
        },
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Saturday',
                'Sunday'
            ],
            opens: '08:00',
            closes: '23:00'
        },
        sameAs: [
            'https://instagram.com/diyarjeddah',
            'https://twitter.com/diyarjeddah'
        ],
        description: 'أفضل مؤسسة تركيب مظلات سيارات وسواتر وبرجولات في جدة. توريد وتركيب كافة أعمال الحدادة والمظلات بأفضل الأسعار وضمان 10 سنوات.',
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'خدمات ديار جدة',
            itemListElement: [
                {
                    '@type': 'Service',
                    name: 'تركيب مظلات سيارات',
                    url: 'https://deyarsu.com/services/car-shades',
                    description: 'مظلات سيارات بجميع الأنواع (بي في سي، بولي إيثيلين، خشبية) لحماية سيارتك من الشمس.'
                },
                {
                    '@type': 'Service',
                    name: 'تركيب برجولات',
                    url: 'https://deyarsu.com/services/pergolas',
                    description: 'برجولات خشبية وحديد للحدائق والأسطح بتصاميم عصرية.'
                },
                {
                    '@type': 'Service',
                    name: 'بيوت شعر وخيام',
                    url: 'https://deyarsu.com/services/tents',
                    description: 'تجهيز بيوت شعر ملكية وخيام بجميع المقاسات والمواصفات.'
                },
                {
                    '@type': 'Service',
                    name: 'سواتر وحواجز',
                    url: 'https://deyarsu.com/services/sawatr',
                    description: 'سواتر حديد وقماش وبلاستيك للحماية والخصوصية.'
                },
                {
                    '@type': 'Service',
                    name: 'ساندوتش بانل وهناجر',
                    url: 'https://deyarsu.com/services/panel',
                    description: 'تركيب غرف وملاحق ومستودعات ساندوتش بانل عازلة للحرارة.'
                },
                {
                    '@type': 'Service',
                    name: 'تنسيق حدائق',
                    url: 'https://deyarsu.com/services/landscaping',
                    description: 'تصميم وتنفيذ حدائق منزلية وشلالات ونوافير وعشب صناعي.'
                },
                {
                    '@type': 'Service',
                    name: 'ترميم مباني',
                    url: 'https://deyarsu.com/services/restoration',
                    description: 'خدمات ترميم وصيانة المباني والفلل ومعالجة التشققات.'
                },
                {
                    '@type': 'Service',
                    name: 'تركيب قرميد',
                    url: 'https://deyarsu.com/services/qarmid',
                    description: 'توريد وتركيب قرميد معدني وفخار لعزل وتزيين الأسطح.'
                }
            ]
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
