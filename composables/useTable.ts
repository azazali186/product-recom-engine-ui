import { reactive, ref, toRefs } from "vue";
import Utils from "~/helpers/Utils";
import { useI18n } from "vue-i18n";

export default function useTable(paginate: any, trash: any, bulkTrash: any) {
  const { t } = useI18n();

  const state = reactive({
    showAdd: false,
    showEdit: false,
    showDelete: false,
    showConfirm: false,
    showConfirmResteProfit: false,
    showToggleClickConfirm: false,
    showConfirmDelete: false,
    filters: {},
    selected: [],
  });

  const pagination = ref({
    sortBy: "created_at",
    descending: false,
    page: 1,
    rowsPerPage: 15,
    rowsNumber: 0,
  });

  async function onRequest(props: { pagination: any; filter?: any }) {
    const { page, rowsPerPage, sortBy, descending } = props.pagination;
    try {
      const response = await paginate(props);
      pagination.value.rowsNumber = response.data.total;
      pagination.value.page = page;
      pagination.value.rowsPerPage = rowsPerPage;
      pagination.value.sortBy = sortBy;
      pagination.value.descending = descending;
    } catch (err: any) {
      $q.notify({
        type: "negative",
        icon: "fas fa-exclamation-triangle",
        message: err.toString(),
      });
    }
  }

  function onRefresh(filter: any) {
    onRequest({
      pagination: pagination.value,
      filter: filter ? filter : undefined,
    });
    state.selected = [];
    state.showAdd = false;
    state.showEdit = false;
    state.showDelete = false;
    state.showConfirm = false;
  }

  function onRowClick(evt, row) {
    state.selected = [row];
    state.showEdit = true;
  }

  function onRowDblClick(evt, row) {}

  async function onDelete(type = "Data") {
    let itemIds = state.selected?.map((item) => {
      return item.id;
    });

    try {
      if (bulkTrash && itemIds.length > 1) {
        await bulkTrash(itemIds);
      } else {
        try {
          await trash(itemIds[0]);
        } catch (err) {
          //throw Error(Utils.getErrorMessage(err));
          throw Utils.getErrorMessage(err);
        }
      }

      $q.notify({
        type: "positive",
        icon: "fas fa-check",
        message: t(Utils.getKey(`${type}(s) deleted successfully`)),
      });
    } catch (err: any) {
      $q.notify({
        type: "negative",
        icon: "fas fa-exclamation-triangle",
        message: err.toString(),
      });
    }

    state.showConfirm = false;
    state.selected = [];
    onRequest({
      pagination: pagination.value,
      filter: undefined,
    });
  }

  return {
    ...toRefs(state),
    pagination,
    onRequest,
    onRefresh,
    onRowClick,
    onRowDblClick,
    onDelete,
  };
}
