webpackJsonp([106],{427:function(e,t){e.exports={content:["section",["p","It is suitable for displaying the long list data type of the same kind, and has certain optimization effect on the rendering performance."]],meta:{category:"Components",type:"Combination",title:"ListView",filename:"components/list-view/index.en-US.md"},api:["section",["h2","API"],["table",["thead",["tr",["th","Properties"],["th","Descrition"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","dataSource"],["td","An instance of ",["a",{title:null,href:"https://facebook.github.io/react-native/docs/listviewdatasource"},"ListView.DataSource"]," to use"],["td","ListViewDataSource"],["td","-"]],["tr",["td","initialListSize"],["td","How many rows to render on initial component mount."],["td","number"],["td","-"]],["tr",["td","onEndReached"],["td","Called when all rows have been rendered and the list has been scrolled to within ",["code","onEndReachedThreshold"]," of the bottom."],["td","(event?) => {}"],["td","-"]],["tr",["td","onEndReachedThreshold"],["td","Threshold in pixels (virtual, not physical) for calling ",["code","onEndReached"],"."],["td","number"],["td","1000"]],["tr",["td","pageSize"],["td","Number of rows to render per event loop."],["td","number"],["td","1"]],["tr",["td","renderHeader / renderFooter"],["td","The header and footer are always rendered (if these props are provided) on every render pass. If they are expensive to re-render, wrap them in StaticContainer or other mechanism as appropriate. Footer is always at the bottom of the list, and header at the top, on every render pass."],["td","() => renderable"],["td","-"]],["tr",["td","renderRow"],["td","Takes a data entry from the data source and its ids and should return a renderable component to be rendered as the row. By default the data is exactly what was put into the data source, but it's also possible to provide custom extractors. ListView can be notified when a row is being highlighted by calling highlightRow function."],["td","(rowData, sectionID, rowID, highlightRow) => renderable"],["td","-"]],["tr",["td","renderScrollComponent"],["td","A function that returns the scrollable component in which the list rows are rendered. Defaults to returning a ScrollView with the given props."],["td","(props) => renderable"],["td","-"]],["tr",["td","renderSectionHeader"],["td","If provided, a header is rendered for this section."],["td","(sectionData, sectionID) => renderable"],["td","-"]],["tr",["td","renderSeparator"],["td","If provided, a renderable component to be rendered as the separator below each row but not the last row if there is a section header below. Take a sectionID and rowID of the row above and whether its adjacent row is highlighted."],["td","(sectionID, rowID, adjacentRowHighlighted) => renderable"],["td","-"]],["tr",["td","scrollRenderAheadDistance"],["td","How early to start rendering rows before they come on screen, in pixels."],["td","number"],["td","1000"]],["tr",["td","contentContainerStyle"],["td","These styles will be applied to the scroll view content container which wraps all of the child views."],["td","Object"],["td","-"]],["tr",["td","horizontal"],["td","When true, the scroll view's children are arranged horizontally in a row instead of vertically in a column."],["td","bool"],["td","false"]],["tr",["td","onContentSizeChange"],["td","Called when scrollable content view of the ScrollView changes."],["td","(contentWidth, contentHeight) => {}"],["td","-"]],["tr",["td","onScroll"],["td","Fires at most once per frame during scrolling. The frequency of the events can be controlled using the ",["code","scrollEventThrottle"]," prop."],["td","e => {}"],["td","-"]],["tr",["td","scrollEventThrottle"],["td","This controls how often the scroll event will be fired while scrolling"],["td","number"],["td","50"]],["tr",["td","onLayout"],["td","Invoked on mount and layout changes with"],["td","({nativeEvent:{ layout:{ width, height }}}) => {}"],["td","-"]],["tr",["td","----"]],["tr",["td","renderBodyComponent"],["td","render listview body wrapper component"],["td","() => renderable"],["td","-"]],["tr",["td","renderSectionWrapper"],["td"],["td","render listview section wrapper component"],["td","(sectionID) => renderable"],["td","-"]],["tr",["td","renderSectionBodyWrapper"],["td","render listview section body wrapper component"],["td","(sectionID) => renderable"],["td","-"]],["tr",["td","useBodyScroll"],["td","use html ",["code","body"],"'s scroll"],["td","bool"],["td","false"]],["tr",["td","pullToRefresh"],["td","Whether enable pullToRefresh, you need use it with ",["code","PullToRefresh"]," component"],["td","bool"],["td","false"]]]],["h3","Methods"],["ul",["li",["p","getMetrics() - Exports some data, e.g. for perf investigations or analytics."]],["li",["p","scrollTo(...args) - Scrolls to a given x, y offset(not support smooth animation)."]]],["h2","ListView.IndexedList"],["p",'This component is often used in the "Contacts" / "city list" scenes, support for index navigation.'],["blockquote",["p","You can use almost all APIs on the ListView."],["p","Note: Only two-step rendering is supported, so that the first screen priority display can be achieved, but if the list data volume is too large, the overall performance will still be affected."]],["table",["thead",["tr",["th","Properties"],["th","Descrition"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","quickSearchBarTop"],["td","top button object of navigation bar"],["td","object{value:string, label:string}"],["td",["code","{ value: '#', label: '#' }"]]],["tr",["td","quickSearchBarStyle"],["td","quickSearchBar's style"],["td","object"],["td","-"]],["tr",["td","onQuickSearch"],["td","fire on clicking navigation bar."],["td","(sectionID: any, topId?:any) => void"],["td","-"]],["tr",["td","showQuickSearchIndicator"],["td","whether show quick search indicator"],["td","bool"],["td","false"]],["tr",["td","delayTime"],["td","delay rendering time setting (for the first screen optimization, the initial rendering of the number of ",["code","initialListSize"]," data, after which time rendering the remaining data items, ie ",["code","totalRowCount - initialListSize"],")"],["td","number"],["td",["code","100ms"]]],["tr",["td","delayActivityIndicator"],["td","the loading indicator for delayed rendering."],["td","react node"],["td","-"]]]],["h2","Tips"],["p","ListView has two types of scroll containers:"],["ol",["li",["p","Partial div container"],["ul",["li",["p","default, note: ",["strong","need to manually set the height of the ListView"]]]]],["li",["p","html body container"],["ul",["li",["p","set ",["code","useBodyScroll"]," to take effect (do not need to set height)"]]]]]]}}});