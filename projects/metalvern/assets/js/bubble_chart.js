var w = 1200;
var h = 1200;

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

var bubble = d3.pack(counts)
        .size([w, h])
        .padding(20);
var svg = d3.select(".chart")
        .append("svg")
        .attr("width", w)
        .attr("height", h)
        .attr("class", "bubble")
        .style("display", "block")
        .style("margin", "auto");

outer_ring = svg.append("g")

outer_ring.append("svg")
      .style("fill", "red")
      .attr("opacity", "0.4")
      .attr("viewBox", "0 0 240 240")
      .append("path")
      .attr("d", "m103.68 235.46c-19.9-2.7113-37.627-10.432-55.294-24.082-23.139-17.878-38.93-45.6-42.936-75.374-1.7681-13.143-1.7681-17.857 0-31 6.9553-51.702 47.961-92.782 99.337-99.517 14.089-1.8468 17.334-1.8468 31.422 0 20.968 2.7487 38.331 10.181 56.402 24.143 17.795 13.749 30.976 32.763 38.416 55.413 3.1378 9.5534 5.9324 26.258 5.9324 35.461 0 2.75-0.63564 9.725-1.4125 15.5-6.9553 51.702-47.961 92.782-99.337 99.517-13.356 1.7509-19.315 1.7397-32.53-0.0608zm13.319-3.7466c0-0.1598-1.3745-4.5473-3.0545-9.75l-11.613-35.959c-4.7071-14.575-8.8729-26.843-9.2574-27.262s-18.115-0.64405-39.4-0.5l-38.701 0.26192 5.4687 11c8.0703 16.233 17.032 27.273 31.853 39.238 12.925 10.435 34.341 19.678 51.35 22.163 6.0216 0.87955 13.355 1.3235 13.355 0.80852zm32-3.3688c12.921-3.3415 30.02-11.783 39.705-19.602 14.82-11.965 23.783-23.005 31.853-39.238l5.4687-11-38.701-0.26192c-21.286-0.14405-39.016 0.08095-39.4 0.5s-4.5504 12.687-9.2574 27.262-9.9328 30.757-11.613 35.959-3.0545 9.6431-3.0545 9.8675c0 1.0209 16.433-1.2707 25-3.4863zm-20.528-25.841c3.7135-11.55 8.2764-25.493 10.14-30.985s3.3879-10.779 3.3879-11.75c0-1.6316-1.622-1.7648-21.5-1.7648-19.081 0-21.5 0.18081-21.5 1.6071 0 0.88389 2.75 9.9964 6.1111 20.25s7.8762 24.043 10.033 30.643 4.147 12.638 4.4217 13.417c0.91653 2.6014 2.095-0.23255 8.9062-21.417zm-37.472-50.525c0-0.56371-2.9537-10.023-6.5638-21.02-4.607-14.034-6.9174-19.777-7.75-19.263-3.2307 1.9926-55.686 40.491-55.686 40.869 0 0.24103 15.75 0.43824 35 0.43824 23.234 0 35-0.34455 35-1.0249zm60.851-21.791c4.0429-12.274 7.1929-22.431 7-22.572-23.691-17.321-37.389-26.945-38.351-26.945-0.67552 0-9.5019 6.0049-19.614 13.344l-18.722 13.586c-0.41209 0.29632 12.698 41.206 13.995 43.671 0.85589 1.6267 2.8253 1.7466 24.635 1.5l23.705-0.26799 7.3508-22.316zm68.149 22.378c0-0.37846-52.455-38.877-55.686-40.869-0.83257-0.51351-3.1429 5.229-7.75 19.263-3.6101 10.997-6.5638 20.456-6.5638 21.02 0 0.68036 11.766 1.0249 35 1.0249 19.25 0 35-0.19721 35-0.43824zm-174.31-24.128c16.396-11.922 29.976-21.824 30.178-22.005s-0.83009-4.0636-2.2926-8.6287-6.4284-20-11.035-34.3-8.6682-27.012-9.0248-28.25c-0.86276-2.9936-1.7603-2.8479-6.1605 1-19.929 17.428-33.844 42.832-37.286 68.072-2.5085 18.393 0.33999 47.887 4.4718 46.301 0.73605-0.28245 14.753-10.268 31.15-22.19zm183.19 19.316c2.9778-9.4021 3.9378-29.651 2.059-43.428-3.4422-25.24-17.358-50.645-37.286-68.072-4.4002-3.8479-5.2977-3.9936-6.1605-1-0.35665 1.2375-4.4178 13.95-9.0248 28.25s-9.5729 29.735-11.035 34.3-2.4942 8.4492-2.2926 8.6313c2.1323 1.9266 61.428 44.569 61.974 44.569 0.40538 0 1.2003-1.4625 1.7664-3.25zm-129.66-58.246c9.0926-6.5978 16.334-12.448 16.092-13-0.70385-1.6048-55.346-40.799-55.987-40.159-0.31862 0.31862 2.2352 9.2588 5.6753 19.867 10.549 32.529 14.033 43.232 14.525 44.612 0.25965 0.72815 1.0774 1.1782 1.8173 1s8.7846-5.7222 17.877-12.32zm66.291-1.0039c14.443-44.375 16.693-51.633 16.171-52.155-0.64024-0.64024-55.285 38.555-55.982 40.155-0.54614 1.2534 32.298 25.452 34.192 25.191 0.84093-0.11584 3.056-5.3159 5.6192-13.191zm-28.427-26.434c9.031-6.5635 18.67-13.575 21.42-15.582s9.3875-6.8221 14.75-10.701 9.75-7.4152 9.75-7.8583c0-1.7143-24.93-12.953-34.5-15.553-9.146-2.4849-11.537-2.7169-28-2.7169s-18.854 0.23203-28 2.7169c-9.5704 2.6002-34.5 13.839-34.5 15.553 0 0.44306 4.3875 3.9793 9.75 7.8583s12 8.6945 14.75 10.701c17.588 12.833 37.864 27.516 38 27.516 0.08796 0 7.549-5.3701 16.58-11.934z")

var nodes = d3.hierarchy(counts)
        .sum(function(d) {
          return d.count; });

var node = svg.selectAll(".node")
        .data(bubble(nodes).descendants())
        .enter()
        .filter(function(d){
            return  !d.children
        })
        .append("g")
        .on("click", function(event,d){
            removeAllChildNodes(document.getElementById("fest_title"))
            removeAllChildNodes(document.getElementById("back"))
            removeAllChildNodes(document.getElementById("bands"))
            document.getElementById("chart").classList.add('hidden')
            var test = document.createElement("p")
            var title = document.createElement("h1")
            var back = document.createElement("h3")
            var link = document.createElement("a")
            link.href="#";
            link.onclick = function(){
              document.getElementById("setlist").classList.remove('visible')
              document.getElementById("setlist").classList.add('hidden')
              document.getElementById("chart").classList.remove('moved')
              document.getElementById("chart").classList.add('visible')
              setTimeout(function(){
                document.getElementById("setlist").classList.add('moved')
                document.getElementById("chart").classList.remove('hidden')
              }, 300)

            }
            var backtext = document.createTextNode("← Go Back")
            link.appendChild(backtext);
            back.appendChild(link);
            var titletext = document.createTextNode(d.data.word[0].toUpperCase() + d.data.word.substring(1) + " Metal Fest 2020 Lineup")
            title.appendChild(titletext)
            d3.json("assets/js/data.json").then(function(data){
              setTimeout(function(){
                document.getElementById("chart").classList.add('moved')
                for(let i = 0; i < data[d.data.word].length; i ++){
                  var testtext = document.createTextNode(data[d.data.word][i] + " - ")
                  test.appendChild(testtext)
                }
                document.getElementById("fest_title").appendChild(title);
                document.getElementById("back").appendChild(back);
                document.getElementById("bands").appendChild(test);
                document.getElementById("chart").classList.remove('visible')
                document.getElementById("setlist").classList.add('visible')
                document.getElementById("setlist").classList.remove('hidden')
                document.getElementById("setlist").classList.remove('moved')
              }, 300)
            })
        })
        .attr("class", "node")
        .attr("transform", function(d) {
            return "translate(" + d.x + "," + d.y + ")";
        });

node.append("title")
        .text(function(d) {
            return d.data.count;
        });

node.append("circle")
        .attr("class", "circle")
        .attr("r", function(d) {
            return d.r;
        })
        .style("stroke-width", "4px")

node.append("text")
        .attr("dy", ".3em")
        .attr("font-size", "1em")
        .style("font-family", "Arial, Helvetica, sans-serif")
        .style("text-anchor", "middle")
        .style("pointer-events", "none")

        .style("fill", "white")
        .text(function(d) {
            return d.data.word;
        });

d3.select(self.frameElement)
        .style("height", w + "px");
