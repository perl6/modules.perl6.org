/**
 * This filtering plugin will allow matching of module names in either
 * form of 'Foo::Bar', or 'Foo-Bar'.
 *
 * Based on dataTables.filter.phoneNumber.js
 *
 * @summary Make Perl module names searchable
 * @name Perl module
 * @author Zak B. Elep
 *
 * @example
 *   $(document).ready(function() {
 *     $('#example').dataTable({
 *       columDefs: [
 *         { type: 'perlModule', target: 1 }
 *       ]
 *     });
 *   });
 */

jQuery.fn.DataTable.ext.type.search.perlModule = function(data) {
    return !data ?
        '' :
        typeof data === 'string' ?
        data.replace(/::/g, '-') :
        data;
};
