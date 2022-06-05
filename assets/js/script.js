const $btn = document.getElementById('search')
const $colors_div = document.getElementById('colors')
const colors = data

$btn.addEventListener('click', (e) => {

    // Get search string
    const search_string = document.getElementById('search_string').value

    // Get objects that equal search string
    const res = colors.filter(color => {
        return color.name === search_string
    })

    // Get object colors
    const objColors = res[0].colors

    // Clear colors in html
    $colors_div.textContent = ''

    // Add colors to html
    objColors.forEach(color => {
        let p = document.createElement("p")
        $colors_div.append(color, p)
    })
})
