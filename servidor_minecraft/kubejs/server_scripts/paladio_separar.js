// =============================================
// Separar Paladio de Galosphere y Confluence
// Para que no compartan tags y crafteos
// =============================================

ServerEvents.tags('item', event => {
    
    // === Quitamos el Paladio de GALOSPHERE de los tags comunes ===
    // Así el paladio de Galosphere solo se usa en recetas de Galosphere
    event.remove('c:ingots/palladium', 'galosphere:palladium_ingot')
    event.remove('c:raw_materials/palladium', 'galosphere:raw_palladium')  // si existe
    event.remove('c:ores/palladium', 'galosphere:palladium_ore')          // si existe
    event.remove('c:storage_blocks/palladium', 'galosphere:palladium_block') // si existe

    // Opcional: también quitar los tags de forge (muchos mods usan #forge: en vez de #c:)
    event.remove('forge:ingots/palladium', 'galosphere:palladium_ingot')
    event.remove('forge:raw_materials/palladium', 'galosphere:raw_palladium')
    event.remove('forge:ores/palladium', 'galosphere:palladium_ore')
    event.remove('forge:storage_blocks/palladium', 'galosphere:palladium_block')

    // === Si prefieres separar al revés (quitar el de Confluence) ===
    // Descomenta las líneas de abajo y comenta las de arriba

    /*
    event.remove('c:ingots/palladium', 'confluence:palladium_ingot')
    event.remove('c:raw_materials/palladium', 'confluence:raw_palladium')
    event.remove('c:ores/palladium', 'confluence:palladium_ore')
    event.remove('c:storage_blocks/palladium', 'confluence:palladium_block')

    event.remove('forge:ingots/palladium', 'confluence:palladium_ingot')
    event.remove('forge:raw_materials/palladium', 'confluence:raw_palladium')
    event.remove('forge:ores/palladium', 'confluence:palladium_ore')
    event.remove('forge:storage_blocks/palladium', 'confluence:palladium_block')
    */

})

console.log('Tags de Paladio separados correctamente (Galosphere vs Confluence)')