import api from '../../utils/axios';

export const getClientDocuments = (
  table_name,
  page_size,
  page_number,
  filters = {},
  text_search = '',
  text_search_fields = []
) =>
  api.get('api/client_documents', {
    params: {
      table_name,
      page_size,
      page_number,
      ...Object.fromEntries(Object.keys(filters).map(key => [`value.${key}`, filters[key]])),
      regex_flags: 'i',
      regex_normalize_characters: true,
      regex_fields: text_search_fields.map(field => `value.${field}`),
      ...Object.fromEntries(text_search_fields.map(field => [`value.${field}`, text_search]))
    }
  });

export const deleteClientDocument = (user, clientDocument) =>
  api.delete(
    `api/users/${encodeURIComponent(user._id)}/client_documents/${encodeURIComponent(clientDocument._id)}`
  );

export const createClientDocument = (user, clientModel, clientDocument) =>
  api.post(`api/users/${encodeURIComponent(user._id)}/client_documents`, {
    table_name: clientModel.table_name,
    value: clientDocument
  });

export const updateClientDocument = (user, clientDocument) =>
  api.put(
    `api/users/${encodeURIComponent(user._id)}/client_documents/${encodeURIComponent(clientDocument._id)}`,
    clientDocument
  );

export const getDistinctClientDocuments = (keys = []) =>
  api.get('api/client_document_distinct', {
    params: Object.fromEntries(keys.map(key => [`value.${key}`, true]))
  });

export const showClientDocument = _id => api.get(`api/client_documents/${encodeURIComponent(_id)}`);