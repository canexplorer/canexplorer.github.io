(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{535:function(t,s,a){"use strict";a.r(s);var e=a(6),i=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"redis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[t._v("#")]),t._v(" redis")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[t._v("Redis是一个开源的使用ANSI C语言编写、遵守BSD协议、支持网络、可基于内存亦可持久化的日志型、Key-Value数据库，并提供多种语言的API。 \n它通常被称为数据结构服务器，因为值（value）可以是 字符串(String), 哈希(Hash), 列表(list), 集合(sets) 和 有序集合(sorted sets)等类型。")])]),a("p",[t._v("Redis 提供了两种持久化方式:RDB（默认）和AOF。"),a("br"),t._v("\nRDB：在指定的时间间隔内，执行指定次数的写操作，则会将内存中的数据写入到磁盘中。（快照模式）"),a("br"),t._v("\nAOF：它采用日志的形式来记录每个写操作，并追加到文件中。（命令追加）")]),t._v(" "),a("p"),t._v(" "),a("h2",{attrs:{id:"什么是缓存穿透-如何避免-什么是缓存雪崩-何如避免"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是缓存穿透-如何避免-什么是缓存雪崩-何如避免"}},[t._v("#")]),t._v(" 什么是缓存穿透？如何避免？什么是缓存雪崩？何如避免？")]),t._v(" "),a("h3",{attrs:{id:"缓存穿透"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存穿透"}},[t._v("#")]),t._v(" 缓存穿透")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[t._v("一般的缓存系统，都是按照key去缓存查询，如果不存在对应的value，就应该去后端系统（数据库）中查找（比如DB）。一些恶意的请求会故意查询不存在的key，请求量很大，就会对后端系统造成很大的压力。这就叫做缓存穿透。")])]),a("p",[t._v("如何避免？")]),t._v(" "),a("ol",[a("li",[t._v("不存在也缓存：对查询结果为空的情况也进行缓存，缓存时间设置短一点，或者该key对应的数据insert了之后清理缓存。")]),t._v(" "),a("li",[t._v("布隆过滤器：对一定不存在的key进行过滤。可以把所有的可能存在的key放到一个大的Bitmap中，查询时通过该bitmap过滤。")])]),t._v(" "),a("h3",{attrs:{id:"缓存雪崩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存雪崩"}},[t._v("#")]),t._v(" 缓存雪崩")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[t._v("当缓存服务器重启或者大量缓存集中在某一个时间段失效，这样在失效的时候，会给后端系统带来很大压力。导致系统崩溃。")])]),a("p",[t._v("如何避免？")]),t._v(" "),a("ol",[a("li",[t._v("在缓存失效后，通过加锁或者队列来控制读数据库写缓存的线程数量。比如对某个key只允许一个线程查询数据和写缓存，其他线程等待。")]),t._v(" "),a("li",[t._v("做二级缓存，A1为原始缓存，A2为拷贝缓存，A1失效时，可以访问A2，A1缓存失效时间设置为短期，A2设置为长期。")]),t._v(" "),a("li",[t._v("不同的key，设置不同的过期时间，让缓存失效的时间点尽量均匀。")])])])}),[],!1,null,null,null);s.default=i.exports}}]);