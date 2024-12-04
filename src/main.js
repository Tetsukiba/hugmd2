import { createApp } from 'vue'
import App from './App.vue'
import router from '../router'
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faHouseChimney, faUserGroup, faAnglesRight, faAddressBook, faBookAtlas, faCommentsDollar,
    faFileInvoice, faFileInvoiceDollar, faShop, faBuilding, faBriefcase, faEnvelope, faPhone, faCalendar, faPenToSquare, faFileLines,
    faReceipt, faGlobe, faChartLine, faEye, faBoxArchive, faGear, faCircleInfo, faBolt, faRectangleXmark, faCheck, faBan, faSquarePlus,
    faListCheck, faFileArrowDown, faNoteSticky, faTrashCan, faPlay, faBoxOpen, faUpDownLeftRight, faReply, faReplyAll, faEllipsisVertical, faCommentDots,
    faVideo, faUserPlus, faPaperPlane, faMagnifyingGlassChart, faPlus, faFolderOpen, faTrash, faToolbox, faBusinessTime, faRobot, faClipboardList, faMessage, 
    faUsersRectangle, faPersonDigging, faCircleCheck, faArrowUp, faBars} from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faHouseChimney, faUserGroup, faAnglesRight, faAddressBook, faBookAtlas, faCommentsDollar,
    faFileInvoice, faFileInvoiceDollar, faShop, faBuilding, faBriefcase, faEnvelope, faPhone, faCalendar, faPenToSquare, faFileLines,
    faReceipt, faGlobe, faChartLine, faEye, faBoxArchive, faGear, faCircleInfo, faBolt, faRectangleXmark, faCheck, faBan, faSquarePlus,
    faListCheck, faFileArrowDown, faNoteSticky, faTrashCan, faPlay, faBoxOpen, faUpDownLeftRight, faReply, faReplyAll, faEllipsisVertical, faCommentDots,
    faVideo, faUserPlus, faPaperPlane, faMagnifyingGlassChart, faPlus, faFolderOpen, faTrash, faToolbox, faBusinessTime, faRobot, faClipboardList, faMessage, 
    faUsersRectangle, faPersonDigging, faCircleCheck, faArrowUp, faBars )

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
