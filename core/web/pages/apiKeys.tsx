import Head from "next/head";
import { Button } from "react-bootstrap";
import Router from "next/router";
import { useApi } from "../hooks/useApi";
import { useState } from "react";
import { useSecondaryEffect } from "../hooks/useSecondaryEffect";
import { useHistoryPagination } from "../hooks/useHistoryPagination";
import Link from "next/link";
import Pagination from "../components/pagination";
import LoadingTable from "../components/loadingTable";
import Moment from "react-moment";

import { ApiKeyAPIData } from "../utils/apiData";

export default function Page(props) {
  const { errorHandler, query } = props;
  const { execApi } = useApi(props, errorHandler);
  const [apiKeys, setApiKeys] = useState<ApiKeyAPIData[]>(props.apiKeys);
  const [total, setTotal] = useState(props.total);
  const [loading, setLoading] = useState(false);

  // pagination
  const limit = 100;
  const [offset, setOffset] = useState(query.offset || 0);
  useHistoryPagination(offset, "offset", setOffset);

  useSecondaryEffect(() => {
    load();
  }, [limit, offset]);

  async function load() {
    updateURLParams();
    setLoading(true);
    const response = await execApi("get", `/apiKeys`, {
      limit,
      offset,
    });
    setLoading(false);
    if (response?.apiKeys) {
      setApiKeys(response.apiKeys);
      setTotal(response.total);
    }
  }

  function updateURLParams() {
    let url = `${window.location.pathname}?`;
    if (offset && offset !== 0) {
      url += `offset=${offset}&`;
    }

    const routerMethod =
      url === `${window.location.pathname}?` ? "replace" : "push";
    Router[routerMethod](Router.route, url, { shallow: true });
  }

  return (
    <>
      <Head>
        <title>Grouparoo: API Keys</title>
      </Head>

      <h1>API Keys</h1>

      <p>{total} Api Keys</p>

      <Pagination
        total={total}
        limit={limit}
        offset={offset}
        onPress={setOffset}
      />

      <LoadingTable loading={loading}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Key</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {apiKeys.map((apiKey) => {
            return (
              <tr key={`apiKey-${apiKey.guid}`}>
                <td>
                  <Link
                    href="/apiKey/[guid]/edit"
                    as={`/apiKey/${apiKey.guid}/edit`}
                  >
                    <a>
                      <strong>{apiKey.name}</strong>
                    </a>
                  </Link>
                </td>
                <td>
                  <code>{apiKey.apiKey}</code>
                </td>
                <td>
                  <Moment fromNow>{apiKey.createdAt}</Moment>
                </td>
              </tr>
            );
          })}
        </tbody>
      </LoadingTable>

      <Pagination
        total={total}
        limit={limit}
        offset={offset}
        onPress={setOffset}
      />

      <Button
        variant="primary"
        onClick={() => {
          Router.push("/apiKey/new");
        }}
      >
        Add API Key
      </Button>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = useApi(ctx);
  const { limit, offset } = ctx.query;
  const { apiKeys, total } = await execApi("get", `/apiKeys`, {
    limit,
    offset,
  });
  return { apiKeys, total };
};
