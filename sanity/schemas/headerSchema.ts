const headerSchema = {

    name: "header",
    
    title: "Header",

    type: "document",

    fields: [
        {
            name: "businessName",

            title: "Business Name",

            type: "string",

        },
        {
            name: "logo",

            title: "Business Logo",

            type: "image",

            options: {hotspot:"true"},
            
            fields: [
                
                {
                    name: "alt",

                    title: "Alt",

                    type: "string"
                
                }
            ]

        },
        {
            name: "linkOne",

            title: "Link One",

            type: "slug"

        },
        {
            name: "linkTwo",

            title: "Link Two",

            type: "slug"

        },
        {
            name: "linkThree",

            title: "Link Three",

            type: "slug"

        },
        {
            name: "linkFour",

            title: "Link Four",

            type: "slug",
            

        },
        
          

          


        
    ]
}

export default headerSchema