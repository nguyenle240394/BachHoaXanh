$(function () {
    var l = abp.localization.getResource('BachHoaXanh');


    var dataTable = $('#ListProduct').DataTable(
        abp.libs.datatables.normalizeConfiguration({
            serverSide: true,
            paging: true,
            order: [[1, "asc"]],
            searching: false,
            scrollX: true,
            ajax: abp.libs.datatables.createAjax(bachHoaXanh.products.product.getList),
            columnDefs: [
                
                {
                    "orderable": false,
                    title: l('Product'),
                    data: "name"
                },
                {
                    "orderable": false,
                    title: l('Unit Price'),
                    data: "unitPrice"
                },
                {
                    /*title: l(''),*/
                    rowAction: {
                        items:
                            [
                                {
                                    text: l(''),
                                    visible: abp.auth.isGranted('BachHoaXanh.Bills.Edit'),
                                    icon: 'plus-circle',
                                    action: function (data) {
                                        editModal.open({ id: data.record.id });
                                    }
                                },
                            ]
                    }
                },
            ]
        })

    );
})