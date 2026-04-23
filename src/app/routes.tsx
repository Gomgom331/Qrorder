import { createBrowserRouter } from 'react-router';
import { Layout } from './components/layout/Layout';
import { ClientLayout } from './components/layout/ClientLayout';
import { Dashboard } from './pages/Dashboard';
import { ClientDashboard } from './pages/ClientDashboard';
import { Orders } from './pages/Orders';
import { QrManagement } from './pages/QrManagement';
import { MenuRegister } from './pages/MenuRegister';
import { MenuManagement } from './pages/MenuManagement';
import { BusinessSearch } from './pages/BusinessSearch';
import { CommonCodeManagement } from './pages/CommonCodeManagement';
import { RuleManagement } from './pages/RuleManagement';
import { SystemMenuManagement } from './pages/SystemMenuManagement';
import { MessageManagement } from './pages/MessageManagement';
import { PaymentPlanManagement } from './pages/PaymentPlanManagement';
import { BusinessStatusInquiry } from './pages/BusinessStatusInquiry';
import { CouponManagement } from './pages/CouponManagement';
import { AccessLogInquiry } from './pages/AccessLogInquiry';
import { ChangeHistoryInquiry } from './pages/ChangeHistoryInquiry';
import { AdminManagement } from './pages/AdminManagement';
import { AdminNoticeManagement } from './pages/AdminNoticeManagement';
import { BoardNoticeManagement } from './pages/BoardNoticeManagement';
import { BoardInquiryManagement } from './pages/BoardInquiryManagement';
import { ModalDemo } from './pages/ModalDemo';
import { TagGuide } from './pages/TagGuide';
import { InputGuide } from './pages/InputGuide';
import { ButtonGuide } from './pages/ButtonGuide';
import { CheckboxRadioGuide } from './pages/CheckboxRadioGuide';
import { FormAlertGuide } from './pages/FormAlertGuide';
import { PaginationGuide } from './pages/PaginationGuide';
import { TreeGuide } from './pages/TreeGuide';
import { TableGuide } from './pages/TableGuide';
import { TokenGuide } from './pages/TokenGuide';
import { LogoExport } from './pages/LogoExport';
import { ColorGuide } from './pages/ColorGuide';
import { FileUploadGuide } from './pages/FileUploadGuide';
import { Login } from './pages/Login';
import { ClientLogin } from './pages/ClientLogin';
import { NotFound } from './pages/NotFound';

// Client pages
import { ClientMenuManagement } from './pages/client/ClientMenuManagement';
import { ClientOptionManagement } from './pages/client/ClientOptionManagement';
import { ClientInventoryManagement } from './pages/client/ClientInventoryManagement';
import { ClientOrderManagement } from './pages/client/ClientOrderManagement';
import { ClientTableManagement } from './pages/client/ClientTableManagement';
import { ClientSalesReport } from './pages/client/ClientSalesReport';
import { ClientBranchManagement } from './pages/client/ClientBranchManagement';
import { ClientMenuBoard } from './pages/client/ClientMenuBoard';
import { ClientNoticesAndInquiry } from './pages/client/ClientNoticesAndInquiry';
import { ClientCategoryManagement } from './pages/client/ClientCategoryManagement';
import { ClientStaffCallSettings } from './pages/client/ClientStaffCallSettings';
import { ClientReviewEvent } from './pages/client/ClientReviewEvent';
import { ClientStatCardGuide } from './pages/client/ClientStatCardGuide';
import { ClientBadgeStatusGuide } from './pages/client/ClientBadgeStatusGuide';
import { ClientMenuCardGuide } from './pages/client/ClientMenuCardGuide';

// Customer order pages
import { CustomerQRScan } from './pages/order/CustomerQRScan';
import { CustomerMenuPage } from './pages/order/CustomerMenuPage';

export const router = createBrowserRouter([
  { path: '/login', Component: Login },
  { path: '/client/login', Component: ClientLogin },
  // Customer front-office (standalone, no admin layout)
  { path: '/order', Component: CustomerQRScan },
  { path: '/order/:storeId/table/:tableId', Component: CustomerMenuPage },
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: 'orders/realtime', Component: Orders },
      { path: 'orders/history', Component: Orders },
      { path: 'stores/qr', Component: QrManagement },
      { path: 'stores/tables', Component: QrManagement },
      { path: 'menus', Component: MenuRegister },
      { path: 'menus/categories', Component: MenuManagement },
      { path: 'menus/options', Component: MenuManagement },
      { path: 'system/business', Component: BusinessSearch },
      { path: 'system/common-codes', Component: CommonCodeManagement },
      { path: 'system/rules', Component: RuleManagement },
      { path: 'system/menus', Component: SystemMenuManagement },
      { path: 'system/messages', Component: MessageManagement },
      { path: 'system/payment-plans', Component: PaymentPlanManagement },
      { path: 'system/business-status', Component: BusinessStatusInquiry },
      { path: 'system/coupons', Component: CouponManagement },
      { path: 'system/access-logs', Component: AccessLogInquiry },
      { path: 'system/change-history', Component: ChangeHistoryInquiry },
      { path: 'system/users', Component: AdminManagement },
      { path: 'system/stats', Component: Dashboard },
      { path: 'system/notices', Component: AdminNoticeManagement },
      // 게시판 관리
      { path: 'board/notices', Component: BoardNoticeManagement },
      { path: 'board/notice-management', Component: BoardNoticeManagement },
      { path: 'board/inquiries', Component: BoardInquiryManagement },
      { path: 'board/inquiry-management', Component: BoardInquiryManagement },
      // UI Guide
      { path: 'ui/modals', Component: ModalDemo },
      { path: 'ui/tags', Component: TagGuide },
      { path: 'ui/inputs', Component: InputGuide },
      { path: 'ui/buttons', Component: ButtonGuide },
      { path: 'ui/checkbox-radio', Component: CheckboxRadioGuide },
      { path: 'ui/form-alerts', Component: FormAlertGuide },
      { path: 'ui/pagination', Component: PaginationGuide },
      { path: 'ui/tree', Component: TreeGuide },
      { path: 'ui/table', Component: TableGuide },
      { path: 'ui/token', Component: TokenGuide },
      { path: 'ui/logo', Component: LogoExport },
      { path: 'ui/colors', Component: ColorGuide },
      { path: 'ui/file-upload', Component: FileUploadGuide },
      { path: '*', Component: NotFound },
    ],
  },
  {
    path: '/client',
    Component: ClientLayout,
    children: [
      { index: true, Component: ClientDashboard },
      { path: 'orders/realtime', Component: ClientOrderManagement },
      { path: 'orders/history', Component: ClientOrderManagement },
      { path: 'stores/qr', Component: ClientTableManagement },
      { path: 'stores/tables', Component: ClientTableManagement },
      { path: 'stores/branches', Component: ClientBranchManagement },
      { path: 'stores/staff-call', Component: ClientStaffCallSettings },
      { path: 'menus', Component: ClientMenuManagement },
      { path: 'menus/categories', Component: ClientCategoryManagement },
      { path: 'menus/board', Component: ClientMenuBoard },
      { path: 'menus/options', Component: ClientOptionManagement },
      { path: 'inventory', Component: ClientInventoryManagement },
      { path: 'sales/report', Component: ClientSalesReport },
      { path: 'notices', Component: ClientNoticesAndInquiry },
      { path: 'inquiry', Component: ClientNoticesAndInquiry },
      { path: 'events/review', Component: ClientReviewEvent },
      // Client UI Guide
      { path: 'ui/stat-cards', Component: ClientStatCardGuide },
      { path: 'ui/badges',     Component: ClientBadgeStatusGuide },
      { path: 'ui/menu-cards', Component: ClientMenuCardGuide },
      { path: '*', Component: NotFound },
    ],
  },
]);