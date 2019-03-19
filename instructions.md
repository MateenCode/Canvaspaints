# Instructions

BuildASign Frontend Developer Coding Test

    Using the provided assets, convert the screenshot into a functional
    single page application using html, css, and javascript. This will be
    referred to as the 'designer'. Make sure the elements are positioned
    relative to the viewport rather than the content. Don't worry about
    desktop views, but keep in mind the different resolutions of mobile
    devices. In other words, no need to introduce different layouts (e.g.
    elements change positioning, etc.) unless you feel it is necessary. If
    you feel it is necessary to change the layout, include a readme.txt in
    your project root and explain why.


    The 'Edit Size' and hamburger navigation buttons should each toggle a
    respective animated event when clicked: The 'Edit Size' is a permanent
    fixture button that should present an overlay that covers the screen
    (slide in, fade in, etc) and has some kind of toggle/button to remove it
    and show the designer again. It doesn't have to do anything else and
    there are no specifications around what it looks like or otherwise. The
    navigation button should toggle a dropdown navbar which you can populate
    with some dummy links.


    The 'Rotate' button should flip the aspect ratio of the item within the
    center of the designer (the area containing 'Click to Upload Image').
    Clicking again should represent a 180 degrees rotation and clicking 4
    times total should revert to the original aspect ratio. Note: this
    doesn't have to modify the file such that if you were to save it locally
    it is rotated...just change the user display to rotate.

    When clicking any of the 3 'Upload' buttons, make an asynchronous call
    to
    <a href="https://source.unsplash.com/random" target="_blank"
      >https://source.unsplash.com/random</a
    >
    and make the response image the background of the designer item ( the
    area containeing 'Click to Upload Image'). The image should crop the
    least amount possible. This should still function correctly with the
    previous step's rotate functionality.


    The 'Edit', 'Save', '?', and 'Cart' buttons should do nothing.

## Submitting Results:

    Either return a zipped folder similar to how you received it with a
    finished, working example or provide similar in a repo and send back a
    link to the repo.

    Additional information:

    As far as browser support, assume transpilation for javascript and don't
    worry about including fallbacks for css such as vendor prefixes,
    flexbox, and css-grid.

    Feel free to use any resources you need including a css framework like
    bootstrap (though please extend the bootstrap classes into your own
    class names), a css precompiler like sass, and any javascript framework
    (though preference is vanilla javascript and ES6/any newer
    implementations).
    <!--Feel free to use any icon library such as
    <a href="https://fontawesome.com/?from=io">https://fontawesome.com/?from=io</a> for the icons.-->
