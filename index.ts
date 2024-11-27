import * as fs from "fs";

interface Contact {
    first_name: string;
    last_name: string;
    phone_number: string;
}

interface ContactsData {
    contacts: {
        list: Contact[];
    };
}

// Load the JSON file
fs.readFile("./contacts.txt", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading the JSON file:", err);
        return;
    }

    try {
        const jsonData: ContactsData = JSON.parse(data);
        const contacts = jsonData.contacts.list;

        // Convert each contact to a VCF entry
        const vcfEntries = contacts.map((contact) => {
            const firstName = contact.first_name || "";
            const lastName = contact.last_name || "";
            const phoneNumber = contact.phone_number || "";

            return `
BEGIN:VCARD
VERSION:3.0
FN:${firstName} ${lastName}
N:${lastName};${firstName};;;
TEL:${phoneNumber}
END:VCARD
      `.trim();
        });

        // Combine all entries into one VCF file
        const vcfContent = vcfEntries.join("\n\n");
        const outputPath = "./contact.vcf";

        // Write the VCF content to a file
        fs.writeFile(outputPath, vcfContent, (writeErr) => {
            if (writeErr) {
                console.error("Error writing the VCF file:", writeErr);
                return;
            }
            console.log(`VCF file created successfully at ${outputPath}`);
        });
    } catch (parseError) {
        console.error("Error parsing JSON data:", parseError);
    }
});
